module.exports = {
  plugins: ['prettier'],
  extends: ['taro/react', 'prettier'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-commonjs': 'off',
  },
};
