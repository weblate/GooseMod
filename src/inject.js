window.GooseMod = {};

(async function () {
  this.version = '1.4.0';

  this.removeModuleUI = (field, where) => {
    let settingItem = this.settings.items.find((x) => x[1] === 'Manage Modules');

    settingItem[2].splice(settingItem[2].indexOf(settingItem[2].find((x) => x.subtext === this.modules[field].description)), 1);

    this.moduleStoreAPI.moduleRemoved(this.modules[field]);

    this.modules[field].remove();

    delete this.modules[field];

    this.settings.createFromItems();
    this.openSettingItem(where);
  };

  this.isSettingsOpen = () => {
    return document.querySelector('div[aria-label="USER_SETTINGS"] div[aria-label="Close"]') !== null;
  };

  this.closeSettings = () => {
    let closeEl = document.querySelector('div[aria-label="USER_SETTINGS"] div[aria-label="Close"]');
    
    if (closeEl === null) return false;
    
    closeEl.click(); // Close settings via clicking the close settings button
  };

  this.openSettings = () => {
    settingsButtonEl.click();
  };

  this.openSettingItem = (name) => {
    [...settingsSidebarGooseModContainer.children].find((x) => x.textContent === name).click();
  };

  this.startLoadingScreen = async () => {
    this.closeSettings();

    let html = `<div id="gm-loading-container" class="container-16j22k fixClipping-3qAKRb" style="opacity: 1;"><div class="content-1-zrf2"> <video class="ready-36e6Vk" autoplay="" playsinline=""> <source src="/assets/0bdc0497eb3a19e66f2b1e3d5741634c.webm" type="video/webm"> <source src="/assets/ffac5bb3fb919ce8bf7137d79e9defc9.mp4" type="video/mp4"> <img alt="" src="/assets/5ccabf62108d5a8074ddd95af2211727.png"> </video><div class="text-3c9Zq1"><div class="tipTitle-GL9qAt">Injecting GooseMod</div><div class="tip-2cgoli" id="gm-loading-tip">Injecting</div><div class="body-2Vra9D contentBase-11jeVK"></div></div></div><div style="transform: translate3d(0,0%,0);" class="problems-3mgf6w"><div class="problemsText-1Yx-Kl">Like GooseMod? Let us know!</div><div> <a class="anchor-3Z-8Bb anchorUnderlineOnHover-2ESHQB twitterLink-3NsWMp links-3Ldd4A" href="https://twitter.com/Goose_Mod" rel="noreferrer noopener" target="_blank"> <svg class="icon-3N9Bhy" width="20" height="16" viewBox="0 0 20 16" aria-hidden="false"> <g fill="none" fill-rule="evenodd"> <path fill="currentColor" d="M1,14.1538462 L1.95,14.1538462 C3.73125,14.1538462 5.5125,13.5384615 6.81875,12.4307692 C5.15625,12.4307692 3.73125,11.2 3.1375,9.6 C3.375,9.6 3.6125,9.72307692 3.85,9.72307692 C4.20625,9.72307692 4.5625,9.72307692 4.91875,9.6 C3.1375,9.23076923 1.7125,7.63076923 1.7125,5.66153846 C2.1875,5.90769231 2.78125,6.15384615 3.49375,6.15384615 C2.425,5.41538462 1.83125,4.18461538 1.83125,2.70769231 C1.83125,1.96923077 2.06875,1.23076923 2.30625,0.615384615 C4.20625,3.07692308 7.05625,4.67692308 10.38125,4.8 C10.2625,4.67692308 10.2625,4.30769231 10.2625,4.06153846 C10.2625,1.84615385 12.04375,0 14.18125,0 C15.25,0 16.31875,0.492307692 17.03125,1.23076923 C17.8625,1.10769231 18.8125,0.738461538 19.525,0.246153846 C19.2875,1.23076923 18.575,1.96923077 17.8625,2.46153846 C18.575,2.46153846 19.2875,2.21538462 20,1.84615385 C19.525,2.70769231 18.8125,3.32307692 18.1,3.93846154 L18.1,4.43076923 C18.1,9.84615385 14.18125,16 6.9375,16 C4.68125,16 2.6625,15.3846154 1,14.1538462 Z"></path> <rect width="20" height="16"></rect> </g> </svg> Tweet Us </a> <a class="anchor-3Z-8Bb anchorUnderlineOnHover-2ESHQB statusLink-gFXhrL links-3Ldd4A" href="https://gitdab.com/duck/GooseMod" rel="noreferrer noopener" target="_blank"> <svg class="icon-3N9Bhy" aria-hidden="false" width="14" height="14" viewBox="0 0 14 14"> <path fill="currentColor" d="M6.99471698,9.67522659 C8.47108874,9.67522659 9.66792453,8.47748685 9.66792453,7 C9.66792453,5.52251315 8.47108874,4.32477341 6.99471698,4.32477341 C5.51834522,4.32477341 4.32150943,5.52251315 4.32150943,7 C4.32150943,8.47748685 5.51834522,9.67522659 6.99471698,9.67522659 Z M6.99471698,2.67522659 C8.18867925,2.67522659 9.26641509,3.16163142 10.0483019,3.94410876 L11.9396226,2.05135952 C10.6822642,0.782477341 8.92830189,0 6.99471698,0 C3.12754717,0 0,3.14048338 0,7 L2.67320755,7 C2.67320755,4.6102719 4.60679245,2.67522659 6.99471698,2.67522659 Z M11.3267925,7 C11.3267925,9.3897281 9.39320755,11.3247734 7.00528302,11.3247734 C5.81132075,11.3247734 4.73358491,10.8383686 3.94113208,10.0558912 L2.04981132,11.9486405 C3.31773585,13.2175227 5.06113208,14 6.99471698,14 C10.8618868,14 14,10.8595166 14,7 L11.3267925,7 Z"></path> </svg> GitDab Repository (Source Code) </a></div></div></div>`;

    let el = document.createElement('div');

    document.body.appendChild(el);

    el.outerHTML = html;
  };

  this.updateLoadingScreen = async (tip) => {
    let el = document.getElementById('gm-loading-tip');

    if (el === null) return;

    el.textContent = tip;
  }

  this.stopLoadingScreen = async () => {
    let el = document.getElementById('gm-loading-container');

    if (el === null) return false;

    el.remove();
  };

  this.startLoadingScreen();

  this.updateLoadingScreen('Starting...');

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const awaitIframe = (iframe) => {
    return new Promise((res) => {
      iframe.addEventListener("load", function() {
        res();
      });
    })
  }

  const reopenSettings = async () => {
    if (!this.stopLoadingScreen()) {
      this.closeSettings();

      await sleep(1000);
    }

    this.openSettings();

    await sleep(200);

    this.openSettingItem('Module Store');
  };

  this.cspBypasser = {
    frame: document.createElement('iframe'),

    init: async () => {
      this.cspBypasser.frame.src = `${location.origin}/api/gateway`;
      document.body.appendChild(this.cspBypasser.frame);

      await awaitIframe(this.cspBypasser.frame);

      let script = document.createElement('script');
      script.type = 'text/javascript';

      let code = `
      window.addEventListener('message', async (e) => {
        const {url, type} = e.data;

        const proxyURL = \`https://cors-anywhere.herokuapp.com/\${url}\`;

        if (type === 'img') {
          let canvas = document.createElement('canvas');
          let ctx = canvas.getContext('2d');

          let img = new Image();
          img.src = proxyURL;
          img.crossOrigin = 'anonymous';

          img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;

            ctx.drawImage(img, 0, 0);

            e.source.postMessage(canvas.toDataURL("image/png"));
          };

          return;
        }       
        
        const req = await fetch(proxyURL, {
          cache: 'no-store'
        });

        e.source.postMessage(type === 'json' ? await req.json() : (type === 'text' ? await req.text() : await req.blob()));
      }, false);`;

      script.appendChild(document.createTextNode(code));

      this.cspBypasser.frame.contentDocument.head.appendChild(script);
    },

    runCode: (code) => {
      let script = document.createElement('script');
      script.type = 'text/javascript';

      script.appendChild(document.createTextNode(code));

      this.cspBypasser.frame.contentDocument.head.appendChild(script);
    },

    json: (url) => {
      return new Promise((res) => {
        this.cspBypasser.frame.contentWindow.postMessage({url, type: 'json'});

        window.addEventListener('message', async (e) => {
          res(e.data);
        }, false);
      });
    },

    text: (url) => {
      return new Promise((res) => {
        this.cspBypasser.frame.contentWindow.postMessage({url, type: 'text'});

        window.addEventListener('message', async (e) => {
          res(e.data);
        }, false);
      });
    },

    blob: (url) => {
      return new Promise((res) => {
        this.cspBypasser.frame.contentWindow.postMessage({url, type: 'blob'});

        window.addEventListener('message', async (e) => {
          res(e.data);
        }, false);
      });
    },

    image: (url) => {
      return new Promise((res) => {
        this.cspBypasser.frame.contentWindow.postMessage({url, type: 'img'});

        window.addEventListener('message', async (e) => {
          res(e.data);
        }, false);
      });
    },
  };

  this.updateLoadingScreen('Initialising CSP Bypasser...');

  await this.cspBypasser.init();

  this.moduleStoreAPI = {
    modules: [],

    apiBaseURL: 'https://gitdab.com/duck/GooseMod-JSONAPI/raw/branch/master/api',

    updateModules: async () => {
      this.moduleStoreAPI.modules = (await this.cspBypasser.json(`${this.moduleStoreAPI.apiBaseURL}/modules.json`)).sort((a, b) => a.name.localeCompare(b.name));
    },

    importModule: async (moduleName) => {
      const moduleInfo = this.moduleStoreAPI.modules.find((x) => x.filename === moduleName);

      const jsCode = await this.cspBypasser.text(moduleInfo.codeURL);

      await this.importModule({
        filename: `${moduleInfo.filename}.js`,
        data: jsCode
      });

      if (this.modules[moduleInfo.filename].onLoadingFinished !== undefined) {
        await this.modules[moduleInfo.filename].onLoadingFinished();
      }

      let settingItem = this.settings.items.find((x) => x[1] === 'Module Store');

      let item = settingItem[2].find((x) => x.subtext === moduleInfo.description);

      item.type = 'text-and-danger-button';
      item.buttonText = 'Remove';

      if (this.isSettingsOpen()) this.settings.createFromItems();
    },

    moduleRemoved: async (m) => {
      let item = this.settings.items.find((x) => x[1] === 'Module Store')[2].find((x) => x.subtext === m.description);

      item.type = 'text-and-button';
      item.buttonText = 'Import';
    },

    updateStoreSetting: () => {
      let item = this.settings.items.find((x) => x[1] === 'Module Store');

      item[2] = item[2].slice(0, 2);

      let sortedCategories = this.moduleStoreAPI.modules.reduce((cats, o) => cats.includes(o.category) ? cats : cats.concat(o.category), []).sort((a, b) => a.localeCompare(b));

      let arr = Object.entries(this.moduleStoreAPI.modules.reduce((cats, o) => {
        if (!cats[o.category]) cats[o.category]=[];
        cats[o.category].push(o);
        return cats;
      },{})).sort((a, b) => a[0].localeCompare(b[0])).map(o => o[1]);

      let funIndex = sortedCategories.indexOf('fun');

      sortedCategories.push(sortedCategories.splice(funIndex, 1)[0]);
      arr.push(arr.splice(funIndex, 1)[0]);

      for (let i = 0; i < arr.length; i++) {
        item[2].push({
          type: 'header',
          text: sortedCategories[i]
        });

        for (let m of arr[i]) {
          item[2].push({
            type: this.modules[m.filename] ? 'text-and-danger-button' : 'text-and-button',
            text: `${m.name} <span class="description-3_Ncsb">by</span> ${m.author} <span class="description-3_Ncsb">(v${m.version})</span>`,
            buttonText: this.modules[m.filename] ? 'Remove' : 'Import',
            subtext: m.description,
            onclick: async (el) => {
              if (this.modules[m.filename]) {
                el.textContent = 'Removing...';

                this.removeModuleUI(m.filename, 'Module Store');

                return;
              }

              el.textContent = 'Importing...';

              await this.moduleStoreAPI.importModule(m.filename);

              this.settings.createFromItems();
              this.openSettingItem('Module Store');
            }
          });
        }
      }
    }
  };

  this.updateLoadingScreen('Getting modules from Module Store...');

  await this.moduleStoreAPI.updateModules();

  this.updateLoadingScreen('Initialising UI functions...');

  this.logger = {
    regionColors: {
      'import': 'rgb(100, 0, 0)'
    },

    log: [],

    debug: (region, ...args) => {
      let parentRegion = region.split('.')[0];
      console.log(`%cGooseMod%c %c${region}`, 'border: 1px solid white; padding: 2px; background-color: black; color: white', 'background-color: none', `border: 1px solid white; padding: 2px; background-color: ${this.logger.regionColors[parentRegion] || (this.modules[parentRegion] && this.modules[parentRegion].logRegionColor) || 'rgb(0, 0, 0)'}; color: white`, ...(args));
      //log.push(`${region}: ${args.join(' ')}`);
    }
  };

  this.logger.debug('import.version.goosemod', `${this.version}-${this.versionIteration}`);

  if (window.DiscordNative !== undefined) this.logger.debug('import.version.discord', `${DiscordNative.app.getReleaseChannel()} ${DiscordNative.app.getVersion()}`);

  // Settings UI stuff

  this.confirmDialog = (buttonText, title, description) => {
    return new Promise((res) => {
    //Making the div boxes to house the stuff
    let confirmELContainer = document.createElement('div');
    confirmELContainer.classList.add('layerContainer-yqaFcK');

    let confirmELLayer = document.createElement('div');
    confirmELLayer.classList.add('layer-2KE1M9');

    let confirmEL = document.createElement('div');
    confirmEL.classList.add("focusLock-Ns3yie");
    confirmEL.setAttribute('role', 'dialog');
    confirmEL.setAttribute('aria-label', title);
    confirmEL.setAttribute('tabindex', '-1');
    confirmEL.setAttribute('aria-model', 'true');

    let confirmELRoot = document.createElement('div');
    confirmELRoot.classList.add("root-1gCeng", "small-3iVZYw", "fullscreenOnMobile-1bD22y");
    confirmELRoot.style.opacity = '1';
    confirmELRoot.style.transform = 'scale(1)';

    //Header stuff
    let confirmELHeaderDiv = document.createElement('div');
    confirmELHeaderDiv.classList.add('flex-1xMQg5', 'flex-1O1GKY', 'horizontal-1ae9ci', 'horizontal-2EEEnY', 'flex-1O1GKY', 'directionRow-3v3tfG', 'justifyStart-2NDFzi', 'alignCenter-1dQNNs', 'noWrap-3jynv6', 'header-1TKi98');
    confirmELHeaderDiv.style.flex = '0 0 auto';

    let confirmElHeaderH = document.createElement('h4');
    confirmElHeaderH.classList.add("colorStandard-2KCXvj", "size14-e6ZScH", "h4-AQvcAz", "title-3sZWYQ", "defaultColor-1_ajX0", "defaultMarginh4-2vWMG5");
    confirmElHeaderH.textContent = title;

    //Body stuff
    let confirmELBody = document.createElement('div');
    confirmELBody.classList.add('content-1LAB8Z', 'content-mK72R6', 'thin-1ybCId', 'scrollerBase-289Jih');
    confirmELBody.setAttribute('dir', 'ltr');
    confirmELBody.style.overflow = 'hidden scroll';
    confirmELBody.style.paddingRight = '8px';

    let confirmELBodyText = document.createElement('div')
    confirmELBodyText.classList.add('colorStandard-2KCXvj', 'size16-1P40sf')
    confirmELBodyText.textContent = description;

    let confirmELBodyWhitespace = document.createElement('div');
    confirmELBodyWhitespace.setAttribute('aria-hidden', 'true');
    confirmELBodyWhitespace.style.position = 'absolute';
    confirmELBodyWhitespace.style.pointerEvents = 'none';
    confirmELBodyWhitespace.style.minHeight = '0px';
    confirmELBodyWhitespace.style.minWidth = '1px';
    confirmELBodyWhitespace.style.flex = '0 0 auto';
    confirmELBodyWhitespace.style.height = '20px';

    //Button stuff
    let confirmELButtonsDiv = document.createElement('div');
    confirmELButtonsDiv.classList.add('flex-1xMQg5', 'flex-1O1GKY', 'horizontalReverse-2eTKWD', 'horizontalReverse-3tRjY7', 'flex-1O1GKY', 'directionRowReverse-m8IjIq', 'justifyStart-2NDFzi', 'alignStretch-DpGPf3', 'noWrap-3jynv6', 'footer-2gL1pp');

    let confirmELButtonsSubmit = document.createElement('button');
    confirmELButtonsSubmit.type = 'submit';
    confirmELButtonsSubmit.classList.add('button-38aScr', 'lookFilled-1Gx00P', 'colorRed-1TFJan', 'sizeMedium-1AC_Sl', 'grow-q77ONN');

    let confirmELButtonsSubmitDiv = document.createElement('div');
    confirmELButtonsSubmitDiv.classList.add('contents-18-Yxp');
    confirmELButtonsSubmitDiv.textContent = buttonText;

    let confirmELButtonsCancel = document.createElement('button');
    confirmELButtonsCancel.type = 'button';
    confirmELButtonsCancel.classList.add('button-38aScr', 'lookLink-9FtZy-', 'colorPrimary-3b3xI6', 'sizeMedium-1AC_Sl', 'grow-q77ONN');

    let confirmELButtonsCancelDiv = document.createElement('div');
    confirmELButtonsCancelDiv.classList.add('contents-18-Yxp');
    confirmELButtonsCancelDiv.textContent = 'Cancel';

    //Misc
    let confirmELDimBackgroundDiv = document.createElement('div');
    confirmELDimBackgroundDiv.classList.add('backdropWithLayer-3_uhz4');
    confirmELDimBackgroundDiv.style.opacity = '0.85';
    confirmELDimBackgroundDiv.style.backgroundColor = 'rgb(0, 0, 0)';
    confirmELDimBackgroundDiv.style.transform = 'translateZ(0px)';

    //Add all the elements to the document
    //Appending misc
    confirmELContainer.appendChild(confirmELDimBackgroundDiv);

    //Appending root elements
    confirmELContainer.appendChild(confirmELLayer);
    confirmELLayer.appendChild(confirmEL);
    confirmEL.appendChild(confirmELRoot);

    //Appending headers
    confirmELRoot.appendChild(confirmELHeaderDiv);
    confirmELHeaderDiv.appendChild(confirmElHeaderH);

    //Appending body
    confirmELRoot.appendChild(confirmELBody);
    confirmELBody.appendChild(confirmELBodyText);
    confirmELBody.appendChild(confirmELBodyWhitespace);

    //Appending buttons
    confirmELRoot.appendChild(confirmELButtonsDiv);

    confirmELButtonsDiv.appendChild(confirmELButtonsSubmit);
    confirmELButtonsDiv.appendChild(confirmELButtonsCancel);
    confirmELButtonsSubmit.appendChild(confirmELButtonsSubmitDiv);
    confirmELButtonsCancel.appendChild(confirmELButtonsCancelDiv);

    //Inserting element into document
    document.getElementById('app-mount').insertBefore(confirmELContainer, null);

    //Making it function
    confirmELButtonsSubmit.onclick = () => {
      confirmELLayer.remove();
      confirmELDimBackgroundDiv.remove();

      res(true);
    };

    confirmELButtonsCancel.onclick = () => {
      confirmELLayer.remove();
      confirmELDimBackgroundDiv.remove();

      res(false);
    };

    confirmELDimBackgroundDiv.onclick = () => {
      confirmELLayer.remove();
      confirmELDimBackgroundDiv.remove();
    };

    document.querySelector('div[aria-label="Close"]').onclick = () => {
      confirmELLayer.remove();
      confirmELDimBackgroundDiv.remove();
    };
    });
  };

  let settingsButtonEl = document.querySelector('button[aria-label="User Settings"]');

  let settingsLayerEl, settingsSidebarEl, settingsSidebarGooseModContainer, settingsMainEl, settingsClasses;

  this.settings = {
    items: [],

    createItem: (panelName, content, clickHandler, danger = false) => {
      this.settings.items.push(['item', panelName, content, clickHandler, danger]);
    },

    createHeading: (headingName) => {
      this.settings.items.push(['heading', headingName]);
    },

    createSeparator: () => {
      this.settings.items.push(['separator']);
    },

    createFromItems: () => {
      settingsSidebarGooseModContainer.innerHTML = '';

      for (let i of this.settings.items) {
        switch (i[0]) {
          case 'item':
            this.settings._createItem(i[1], i[2], i[3], i[4]);
            break;
          case 'heading':
            this.settings._createHeading(i[1]);
            break;
          case 'separator':
            this.settings._createSeparator();
            break;
        }
      }
    },

    _createItem: (panelName, content, clickHandler, danger = false) => {
      let parentEl = document.createElement('div');

      let headerEl = document.createElement('h2');
      headerEl.textContent = `${panelName} ${content[0]}`;

      headerEl.classList.add('colorStandard-2KCXvj', 'size14-e6ZScH', 'h2-2gWE-o', 'title-3sZWYQ', 'defaultColor-1_ajX0', 'defaultMarginh2-2LTaUL');

      parentEl.appendChild(headerEl);

      let contentEl = document.createElement('div');
      contentEl.className = 'children-rWhLdy';

      parentEl.appendChild(contentEl);

      let i = 0;
      for (let e of content.slice(1)) {
        let el;

        switch (e.type) {
          case 'header':
            el = document.createElement('h2');

            if (i !== 0) {
              el.classList.add('marginTop20-3TxNs6');
            }

            el.classList.add('colorStandard-2KCXvj', 'size14-e6ZScH', 'h5-18_1nd', 'title-3sZWYQ', 'marginBottom8-AtZOdT');

            el.textContent = e.text;
            break;

          case 'toggle':
            el = document.createElement('div');

            el.classList.add('marginBottom20-32qID7');

            let txtEl = document.createElement('span');
            txtEl.classList.add('titleDefault-a8-ZSr', 'title-31JmR4');

            txtEl.style.float = 'left';

            txtEl.innerHTML = e.text;

            let checked = e.isToggled();

            let checkedClass = 'valueChecked-m-4IJZ';
            let uncheckedClass = 'valueUnchecked-2lU_20';

            let toggleEl = document.createElement('div');
            toggleEl.classList.add('flexChild-faoVW3', 'switchEnabled-V2WDBB', 'switch-3wwwcV', checked ? checkedClass : uncheckedClass, 'value-2hFrkk', 'sizeDefault-2YlOZr', 'size-3rFEHg', 'themeDefault-24hCdX');

            toggleEl.onclick = () => {
              checked = !checked;

              if (checked) {
                toggleEl.classList.add(checkedClass);
                toggleEl.classList.remove(uncheckedClass);
              } else {
                toggleEl.classList.remove(checkedClass);
                toggleEl.classList.add(uncheckedClass);
              }

              e.onToggle(checked, el);
            };

            toggleEl.style.float = 'right';

            el.appendChild(txtEl);
            el.appendChild(toggleEl);

            if (e.subtext) {
              let subtextEl = document.createElement('div');

              subtextEl.classList.add('colorStandard-2KCXvj', 'size14-e6ZScH', 'description-3_Ncsb', 'formText-3fs7AJ', 'note-1V3kyJ', 'modeDefault-3a2Ph1');

              subtextEl.textContent = e.subtext;

              subtextEl.style.clear = 'both';

              el.appendChild(subtextEl);
            }

            let dividerEl = document.createElement('div');

            dividerEl.classList.add('divider-3573oO', 'dividerDefault-3rvLe-');
            dividerEl.style.marginTop = e.subtext ? '20px' : '45px';

            el.appendChild(dividerEl);

            break;

          case 'text-and-danger-button':
            el = document.createElement('div');

            el.classList.add('marginBottom20-32qID7');

            let txtEl2 = document.createElement('span');
            txtEl2.classList.add('titleDefault-a8-ZSr', 'title-31JmR4');

            txtEl2.style.float = 'left';

            txtEl2.innerHTML = e.text;

            let buttonEl = document.createElement('div');
            buttonEl.classList.add('button-38aScr', 'lookOutlined-3sRXeN', 'colorRed-1TFJan', 'sizeSmall-2cSMqn', 'grow-q77ONN');

            buttonEl.onclick = () => {
              e.onclick(buttonEl);
            };

            buttonEl.style.cursor = 'pointer';

            buttonEl.style.float = 'right';

            let contentsEl2 = document.createElement('div');

            contentsEl2.classList.add('contents-18-Yxp');

            contentsEl2.textContent = e.buttonText;

            buttonEl.appendChild(contentsEl2);

            el.appendChild(txtEl2);
            el.appendChild(buttonEl);

            if (e.subtext) {
              let subtextEl = document.createElement('div');

              subtextEl.classList.add('colorStandard-2KCXvj', 'size14-e6ZScH', 'description-3_Ncsb', 'formText-3fs7AJ', 'note-1V3kyJ', 'modeDefault-3a2Ph1');

              subtextEl.textContent = e.subtext;

              subtextEl.style.clear = 'both';

              el.appendChild(subtextEl);
            }

            let dividerEl2 = document.createElement('div');

            dividerEl2.classList.add('divider-3573oO', 'dividerDefault-3rvLe-');
            dividerEl2.style.marginTop = e.subtext ? '20px' : '45px';

            el.appendChild(dividerEl2);

            break;

            case 'text-and-button':
              el = document.createElement('div');
  
              el.classList.add('marginBottom20-32qID7');
  
              let txtEl3 = document.createElement('span');
              txtEl3.classList.add('titleDefault-a8-ZSr', 'title-31JmR4');
  
              txtEl3.style.float = 'left';
  
              txtEl3.innerHTML = e.text;
  
              let buttonEl2 = document.createElement('div');
              buttonEl2.classList.add('button-38aScr', 'lookFilled-1Gx00P', 'colorBrand-3pXr91', 'sizeSmall-2cSMqn', 'grow-q77ONN');
  
              buttonEl2.onclick = () => {
                e.onclick(buttonEl2);
              };
  
              buttonEl2.style.cursor = 'pointer';
  
              buttonEl2.style.float = 'right';
  
              let contentsEl3 = document.createElement('div');
  
              contentsEl3.classList.add('contents-18-Yxp');
  
              contentsEl3.textContent = e.buttonText;
  
              buttonEl2.appendChild(contentsEl3);
  
              el.appendChild(txtEl3);
              el.appendChild(buttonEl2);
  
              if (e.subtext) {
                let subtextEl2 = document.createElement('div');
  
                subtextEl2.classList.add('colorStandard-2KCXvj', 'size14-e6ZScH', 'description-3_Ncsb', 'formText-3fs7AJ', 'note-1V3kyJ', 'modeDefault-3a2Ph1');
  
                subtextEl2.textContent = e.subtext;
  
                subtextEl2.style.clear = 'both';
  
                el.appendChild(subtextEl2);
              }
  
              let dividerEl3 = document.createElement('div');
  
              dividerEl3.classList.add('divider-3573oO', 'dividerDefault-3rvLe-');
              dividerEl3.style.marginTop = e.subtext ? '20px' : '45px';
  
              el.appendChild(dividerEl3);
  
              break;

          case 'button':
            el = document.createElement('button');

            el.classList.add('button-38aScr', 'lookFilled-1Gx00P', 'colorBrand-3pXr91', 'sizeSmall-2cSMqn', 'grow-q77ONN');

            let contentsEl = document.createElement('div');

            contentsEl.classList.add('contents-18-Yxp');

            contentsEl.textContent = e.text;

            el.appendChild(contentsEl);

            el.onclick = e.onclick;

            break;
        }

        contentEl.appendChild(el);

        i++;
      }

      let el = document.createElement('div');

      el.classList.add(settingsClasses['item']);
      el.classList.add(settingsClasses['themed']);

      if (danger) {
        el.style.color = 'rgb(240, 71, 71)';

        el.onmouseenter = () => {
          el.style.backgroundColor = 'rgba(240, 71, 71, 0.1)';
        };

        el.onmouseleave = () => {
          el.style.backgroundColor = 'unset';
        };
      }

      el.setAttribute('tabindex', '0');
      el.setAttribute('role', 'button');

      el.innerText = panelName;

      el.onclick = async () => {
        if (clickHandler !== undefined) {
          clickHandler();

          return; 
        }

        setTimeout(() => {
          settingsMainEl.firstChild.innerHTML = '';
          settingsMainEl.firstChild.appendChild(parentEl);

          for (let e of settingsSidebarEl.children) {
            e.classList.remove(settingsClasses['selected']);
          }

          el.classList.add(settingsClasses['selected']);
        }, 10);
      };

      settingsSidebarEl.addEventListener('click', () => {
        if (this.removed === true) return;

        el.classList.remove(settingsClasses['selected']);
      });

      if (panelName === 'Manage Modules' && window.DiscordNative === undefined) return;

      settingsSidebarGooseModContainer.appendChild(el);
    },

    _createHeading: (headingName) => {
      let el = document.createElement('div');
      el.className = settingsClasses['header'];

      el.setAttribute('tabindex', '0');
      el.setAttribute('role', 'button');

      el.innerText = headingName;

      settingsSidebarGooseModContainer.appendChild(el);
    },

    _createSeparator: () => {
      let el = document.createElement('div');
      el.className = settingsClasses['separator'];

      settingsSidebarGooseModContainer.appendChild(el);
    }
  };

  settingsButtonEl.addEventListener('click', async () => {
    if (this.removed) return;

    await sleep(10);

    settingsLayerEl = document.querySelector('div[aria-label="USER_SETTINGS"]');

    settingsSidebarEl = settingsLayerEl.querySelector('nav > div');

    settingsClasses = {};

    for (let e of settingsSidebarEl.children) {
      for (let c of e.classList) {
        let name = c.split('-')[0];

        if (settingsClasses[name] === undefined) {
          settingsClasses[name] = c;
        }
      }
    }

    settingsSidebarGooseModContainer = document.createElement('div');
    settingsSidebarEl.insertBefore(settingsSidebarGooseModContainer, settingsSidebarEl.childNodes[settingsSidebarEl.childElementCount - 4]);//settingsSidebarEl.querySelector(`.${settingsClasses.item}:not(${settingsClasses.themed}) ~ ${settingsClasses.item}:not(${settingsClasses.themed})`));

    let el = document.createElement('div');
    el.className = settingsClasses['separator'];

    settingsSidebarEl.insertBefore(el, settingsSidebarGooseModContainer.nextSibling); //.insertBefore(settingsSidebarGooseModContainer, settingsSidebarEl.childNodes[settingsSidebarEl.childElementCount - 4]);//settingsSidebarEl.querySelector(`.${settingsClasses.item}:not(${settingsClasses.themed}) ~ ${settingsClasses.item}:not(${settingsClasses.themed})`));
    
    let versionEl = document.createElement('div');
    versionEl.classList.add('colorMuted-HdFt4q', 'size12-3cLvbJ');

    versionEl.textContent = `GooseMod ${this.version}`;

    settingsSidebarEl.lastChild.appendChild(versionEl);

    settingsMainEl = settingsLayerEl.querySelector('main');

    this.settings.createFromItems();
  });

  this.updateLoadingScreen('Initialising import functions...');

  this.modules = {};

  const ab2str = (buf) => { // ArrayBuffer (UTF-8) -> String
    return String.fromCharCode.apply(null, new Uint8Array(buf));
  };

  this.importModule = async (f) => {
    let field = f.filename.split('.').slice(0, -1).join('.'); // Get name of module via filename (taking away the file extension)

    this.logger.debug('import', `Importing module: "${field}"`);
      
    let settingItem = this.settings.items.find((x) => x[1] === 'Manage Modules');

    if (this.modules[field] !== undefined) {
      this.logger.debug(`import.load.module.${field}`, 'Module already imported, removing then installing new version');

      await this.modules[field].remove();

      settingItem[2].splice(settingItem[2].indexOf(settingItem[2].find((x) => x.text === `${this.modules[field].name} (${this.modules[field].version})`)), 1);
    }

    if (typeof f.data === 'object') { // ArrayBuffer (UTF-8) -> String
      f.data = ab2str(f.data);
    }

    this.modules[field] = eval(f.data); // Set this.modules.<module_name> to the return value of the module (an object containing handlers)

    this.logger.debug(`import.load.module.${field}`, `Evaled module JS`);

    this.bindHandlers(this.modules[field]); // Bind all handlers to module parent / returned object from module code

    this.logger.debug(`import.load.module.${field}`, `Binded handlers`);

    await this.modules[field].onImport(); // Run the module's onImport handler

    this.logger.debug(`import.load.module.${field}`, `Ran onImport()`);

    let toggleObj = {
      type: 'text-and-danger-button',
      text: `${this.modules[field].name} <span class="description-3_Ncsb">by</span> ${this.modules[field].author} <span class="description-3_Ncsb">(v${this.modules[field].version})</span>`,
      buttonText: 'Remove',
      subtext: this.modules[field].description,
      onclick: (el) => {
        el.textContent = 'Removing...';

        this.removeModuleUI(field, 'Manage Modules');
      }
    };

    settingItem[2].push(toggleObj);

    this.logger.debug(`import.load.module.${field}`, `Added to Modules setting page`);
  };

  this.importModules = async (files) => {
    this.logger.debug('import', 'Looping through files');

    for (let f of files) {
      this.importModule(f);
    }

    this.logger.debug('import', 'Imported all files');
  };

  this.bindHandlers = (handlers) => {
    for (let p in handlers) {
      if (handlers.hasOwnProperty(p) && typeof handlers[p] === 'function') {
        handlers[p] = handlers[p].bind(this);
      }
    }

    return handlers;
  };

  this.getModuleFiles = async () => { // Ask for module files (one by one due to Discord restraint) until no file is chosen
    this.logger.debug('import.fileask', 'Asking for files');

    let allFiles = [];

    while (true) {
      let files = await DiscordNative.fileManager.openFiles(); // Ask for file (singular)

      if (files.length === 0) { // If no file, stop asking for files
        break;
      }

      allFiles.push(files[0]); // Add file to files array
    }

    this.logger.debug('import.fileask', 'Finished asking for files');

    return allFiles;
  };

  this.importModulesFull = async () => {
    if (window.DiscordNative === undefined) {
      alert('Not supported in browser');
      return [];
    }

    let files = await this.getModuleFiles();

    await this.importModules(files);

    return files;
  };

  this.updateLoadingScreen('Creating settings options...');

  this.settings.createHeading('GooseMod');

  this.settings.createItem('Manage Modules', ['',
    {
      type: 'button',
      text: 'Import Local Modules',
      onclick: async () => {
        let files = await this.importModulesFull();

        for (let f of files) {
          let n = f.filename.split('.').slice(0, -1).join('.');

          if (this.modules[n].onLoadingFinished !== undefined) {
            await this.modules[n].onLoadingFinished();
          }
        }

        this.settings.createFromItems();

      },
    },

    {
      type: 'header',
      text: 'Imported Modules'
    }
  ]);

  this.settings.createItem('Module Store', ['',
    {
      type: 'button',
      text: 'Update Index',
      onclick: async () => {
        await this.moduleStoreAPI.updateModules();

        await this.moduleStoreAPI.updateStoreSetting();

        this.settings.createFromItems();

        this.openSettingItem('Module Store');
      },
    }
  ]);

  this.settings.createSeparator();

  this.settings.createItem('Uninstall', [""], async () => {
    if (await this.confirmDialog('Uninstall', 'Uninstall GooseMod', 'Are you sure you want to uninstall GooseMod? This is a quick uninstall, it may leave some code behind but there should be no remaining noticable changes.')) {
      this.closeSettings();

      this.remove();
    }
  }, true);

  if (window.DiscordNative !== undefined) {
    this.settings.createItem('Local Reinstall', [''], async () => {
      if (await this.confirmDialog('Reinstall', 'Reinstall GooseMod', 'Are you sure you want to reinstall GooseMod? This will uninstall GooseMod, then ask you for the inject.js file, then run it to reinstall.')) {
        this.closeSettings();

        this.remove();

        eval(ab2str((await DiscordNative.fileManager.openFiles())[0].data));
      }
    }, true);
  }

  this.settings.createSeparator();

  this.settings.createHeading('GooseMod Modules');

  this.remove = () => {
    this.removed = true;

    for (let p in this.modules) {
      if (this.modules.hasOwnProperty(p) && this.modules[p].remove !== undefined) {
        this.modules[p].remove();
      }
    }
  };

  this.updateLoadingScreen('Updating Module Store setting page...');

  await this.moduleStoreAPI.updateStoreSetting();

  this.updateLoadingScreen('Importing default modules from Module Store...');

  let defaultModules = ['fucklytics', 'visualTweaks'];

  for (let m of defaultModules) {
    await this.moduleStoreAPI.importModule(m);
  }

  reopenSettings();
}).bind({})();