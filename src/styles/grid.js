const grid = {
  context: {
    ':after': {
      content: '""',
      display: 'table',
      clear: 'both',
    },
  },
  span: (span, columns = 12) => ({
    float: 'left',
    width: `${(span / columns) * 100}%`,
  }),
};

export default grid;
