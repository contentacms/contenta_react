const screenSize = {
	small: 600,
  	medium: 992,
  	large: 1200,
};

const breakpoints = {
  mediumAndUp: `only screen and (min-width : ${screenSize.small + 1}px)`,
  largeAndUp: `only screen and (min-width : ${screenSize.medium + 1}px)`,
  extraLargeAndUp: `only screen and (min-width : ${screenSize.large + 1}px)`,
  smallAndDown: `only screen and (max-width : ${screenSize.small}px)`,
  mediumAndDown: `only screen and (max-width : ${screenSize.medium}px)`,
  mediumOnly: `only screen and (min-width : ${screenSize.small + 1}px)`,
};

export default breakpoints;
