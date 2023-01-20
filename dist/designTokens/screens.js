module.exports = {
  screens: {
    sm: '360px',
    md: '768px',
    lg: '992px', // max:992px: default : nav:hidden (icon:menu in topbar (do-open) & navbar (do-close)) onopen: absolute on body (switch-terminal:off --> in topbar) // min:992px -- max:1200px: default : nav:closed onopen: absolute on body (drawer:switch-terminal:on in nav)
    xl: '1200px', // min:1456px: default : nav:opened //onopen: relative on body (switch-terminal:on in nav)
    '2xl': '1456px',
    mobile: { max: '768px' }, // title in topBar  , btn-menu , logo in navmenu //small screen
    tablet: { min: '768px', max: '992px' }, // title in topBar  , btn-menu , logo in navmenu //small screen
    desk: { min: '992px', max: '1200px' },
    deskmx: { max: '1200px' }, // onopen  btn-menu va logo --> in nav-menu   va onclose logo va btn-menu in topbar
  },
};
