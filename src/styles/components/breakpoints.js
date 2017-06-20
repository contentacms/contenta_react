const breakpoints = {
  small: 600,
  medium: 992,
  large: 1200,
  mediumAndUp: `only screen and (min-width : ${this.small + 1}px)`,
  largeAndUp: `only screen and (min-width : ${this.medium + 1}px)`,
  extraLargeAndUp: `only screen and (min-width : ${this.large + 1}px)`,
  smallAndDown: `only screen and (max-width : ${this.small}px)`,
  mediumAndDown: `only screen and (max-width : ${this.medium}px)`,
  mediumOnly: `only screen and (min-width : ${this.small + 1}px)`,
};

export default breakpoints;
