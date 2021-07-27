module.exports = {
  plugins: ['prettier'],
  extends: ['taro/react', 'prettier'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-commonjs': 'off',
    'no-console': process.env.node_env === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.node_env === 'production' ? 'error' : 'warn',
  },
};
