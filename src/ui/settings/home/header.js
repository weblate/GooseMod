import openReposModal from './repos';

export default () => {
const { React } = goosemod.webpackModules.common;

const HomeMiscClasses = goosemod.webpackModules.findByProps('headerBarContainer', 'pageContent');
const SpinClasses = goosemod.webpackModules.findByProps('updateAvailable');
const IconClasses = goosemod.webpackModules.findByProps('icon', 'iconBadge', 'title');

const UpdateIcon = React.createElement(goosemod.webpackModules.findByDisplayName('Retry'), {
  width: 24,
  height: 24,

  className: IconClasses.icon
});

const ReposIcon = React.createElement(goosemod.webpackModules.findByDisplayName('Cloud'), {
  width: 24,
  height: 24,

  className: IconClasses.icon
});

const HeaderBarContainer = goosemod.webpackModules.findByDisplayName('HeaderBarContainer');

const TabBar = goosemod.webpackModules.findByDisplayName('TabBar');
const TabBarClasses1 = goosemod.webpackModules.findByProps('topPill');
const TabBarClasses2 = goosemod.webpackModules.findByProps('tabBar', 'nowPlayingColumn')

const tabsSelected = {
  themes: 'STORE',
  plugins: 'STORE'
};


return class Header extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(HeaderBarContainer, {
      className: HomeMiscClasses.headerBarContainer,

      isAuthenticated: true,
      transparent: false
    },

    React.createElement(HeaderBarContainer.Icon, {
      icon: () => this.props.icon,
      className: IconClasses.icon
    }),

    React.createElement(HeaderBarContainer.Title, {}, this.props.title),

    tabsSelected[this.props.id] ? React.createElement(HeaderBarContainer.Divider) : null,

    tabsSelected[this.props.id] ? React.createElement(TabBar, {
      selectedItem: tabsSelected[this.props.id],

      type: TabBarClasses1.topPill,
      className: TabBarClasses2.tabBar,

      onItemSelect: (x) => {
        tabsSelected[this.props.id] = x;
        this.forceUpdate();

        setTimeout(goosemod.settings.updateModuleStoreUI, 10);
      }
    },
      React.createElement(TabBar.Item, {
        id: 'STORE',
        look: 0,
        
        className: TabBarClasses2.item
      }, 'Store'),
      React.createElement(TabBar.Item, {
        id: 'IMPORTED',
        look: 0,
        
        className: TabBarClasses2.item
      }, 'Imported'),
    ) : null,


    this.props.id !== 'snippets' ? React.createElement('div', {
      className: IconClasses.toolbar,

      style: {
        position: 'absolute',
        right: '0px'
      }
    },
      React.createElement(HeaderBarContainer.Icon, {
        icon: () => UpdateIcon,

        tooltip: '#terms.refresh#',

        onClick: async () => {
          const svgEl = document.querySelector(`.${IconClasses.toolbar} > [role="button"] > svg`);
          svgEl.classList.add(SpinClasses.updateAvailable);

          await goosemod.moduleStoreAPI.hotupdate(true);

          document.querySelector(`.selected-aXhQR6`).click();
        }
      }),
      React.createElement(HeaderBarContainer.Icon, {
        icon: () => ReposIcon,

        tooltip: '#terms.store.repos#',

        onClick: openReposModal
      })
    ) : ''
    );
  }
}
};