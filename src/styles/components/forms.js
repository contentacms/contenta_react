import Colors from './colors';

const inputBorderColor = 'color("grey", "base")';

const forms = {
  input: {
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${inputBorderColor}`,
    borderRadius: 0,
    outline: 'none',
    height: '3rem',
    width: '100%',
    fontSize: '1rem',
    margin: '0 0 20px 0',
    padding: 0,
    boxShadow: 'none',
    boxSizing: 'content-box',
    transition: 'all .3s',
  },
  inputWrapper: {
    position: 'relative',
    marginTop: '1rem',
  },
  label: {
    color: inputBorderColor,
    position: 'absolute',
    top: '0.8rem',
    left: 0,
    fontSize: '1rem',
    cursor: 'text',
    transition: '0.2s east-out',
    textAlgin: 'initial',
  },
  inputSearch: {
    ...this.input,
    display: 'block',
    lineHeight: 'inherit',
    paddingLeft: '4rem',
    width: 'calc(100% - 4rem)',
    ':focus': {
      backgroundColor: Colors.shades.white,
      border: 0,
      boxShadow: 'none',
      color: '#444',
    },
  },
};

export default forms;
