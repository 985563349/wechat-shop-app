module.exports = {
  extends: ['stylelint-prettier/recommended', 'stylelint-config-standard'],
  plugins: ['stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
    'block-no-empty': true,
    'comment-empty-line-before': [
      'always',
      {
        ignore: ['stylelint-commands', 'after-comment'],
      },
    ],
    indentation: [2],
    'max-empty-lines': 2,
  },
};
