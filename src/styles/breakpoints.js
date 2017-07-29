const screenSize = {
  echo: 600,
  lima: 992,
  tango: 1200,
};

const breakpoints = {
  echoAndUp: `@media (min-width : ${screenSize.echo}px)`,
  limaAndUp: `@media (min-width : ${screenSize.lima}px)`,
  tangoAndUp: `@media (min-width : ${screenSize.tango}px)`,
};

export default breakpoints;
