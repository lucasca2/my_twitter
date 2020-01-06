const defaultColors = {
    whiteLighten: '#FFFFFF',
    white: '#F1F1F1',
    whiteDarken: '#939393',
    blackLighten: '#696969',
    black: '#545454',
    blackDarken: '#383838',

    primary: '#2AA3EF',
    primaryLighten: 'rgba(255,255,255,0.5)',

    secondary: '#FFFFFF',
    success: '#56BD8D',
    dangerLight: '#FBE4E6',
    danger: '#E3495A',
    warning: '#FFB800',

    facebook: '#4267B2',
    link: '#5882D8',
    text: '#383838',
    border: '#F1F1F1'
};

const revertColors = {
    whiteLighten: defaultColors.black,
    white: defaultColors.black,
    whiteDarken: defaultColors.black,
    blackLighten: defaultColors.white,
    black: defaultColors.white,
    blackDarken: defaultColors.white,
    primary: defaultColors.secondary,
    secondary: defaultColors.primary,
    success: defaultColors.secondary,
    dangerLight: defaultColors.black,
    danger: defaultColors.secondary,
    warning: defaultColors.secondary,

    facebook: defaultColors.secondary,

    link: defaultColors.secondary,
    text: defaultColors.secondary,
};

export default {
    default: defaultColors,
    revert: revertColors,
    border: defaultColors.white,

    background: defaultColors.secondary,

    // Input
    input: defaultColors.white,
    placeholder: defaultColors.whiteDarken
};

