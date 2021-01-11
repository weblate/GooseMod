const generateIdSegment = () => Math.random().toString(36).replace(/[^a-z0-9]+/g, ''); // Random 12 char string

const generateId = (segments = 3) => new Array(segments).fill(0).map(() => generateIdSegment()).join(''); // Chain random 12 char strings together X times

const modIndex = {};

const beforePatches = (context, args, id, functionName) => {
  const patches = modIndex[id][functionName].before;

  if (patches.length === 0) return args;

  let newArgs;

  for (const patch of patches) {
    newArgs = patch.call(context, args);

    if (newArgs === false) return false;

    if (!Array.isArray(newArgs)) newArgs = args;
  }

  return newArgs;
};

const afterPatches = (context, newArgs, returnValue, id, functionName) => {
  const patches = modIndex[id][functionName].after;
  
  let newReturnValue = returnValue;

  for (const patch of patches) {
    newReturnValue = patch.call(context, newArgs, newReturnValue);
  }
  
  return newReturnValue;
};

const generateNewFunction = (originalFunction, id, functionName) => (function (...args) {
  const newArgs = beforePatches(this, args, id, functionName);

  if (Array.isArray(newArgs)) {
    const returnValue = originalFunction.call(this, ...newArgs);

    return afterPatches(this, newArgs, returnValue, id, functionName);
  }
});

export const patch = (parent, functionName, handler, before = false) => {
  if (!parent._goosemodPatcherId) {
    const id = generateId();

    parent._goosemodPatcherId = id;

    modIndex[id] = {};
  }

  const id = parent._goosemodPatcherId;

  if (!modIndex[id][functionName]) {
    parent[functionName] = generateNewFunction(parent[functionName], id, functionName);

    modIndex[id][functionName] = {
      before: [],
      after: []
    };
  }

  const newLength = modIndex[id][functionName][before ? 'before' : 'after'].push(handler);

  return () => { // Unpatch function
    modIndex[id][functionName][before ? 'before' : 'after'].splice(newLength - 1, 1);
  };
};

// DEPRECATED: Compatibility functions for modules from older (<5.8.0) GooseMod versions
const uninjectors = {};

export const inject = (_id, parent, functionName, handler, before = false) => {
  uninjectors[_id] = patch(parent, functionName, handler, before);
};

export const uninject = (_id) => {
  if (!uninjectors[_id]) return false;

  uninjectors[_id]();

  return true;
};