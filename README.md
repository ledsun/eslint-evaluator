# Usage

Specify a directory of source codes and exisit eslintrc.

For example:

```
babel-node index.js ~/textae/src/ -c .eslintrc
```

# output example

```
------ Rules have errors -------
[ [ 5,
    'no-extra-parens',
    'http://eslint.org/docs/rules/no-extra-parens' ],
  [ 14, 'no-console', 'http://eslint.org/docs/rules/no-console' ],
  [ 17,
    'comma-dangle',
    'http://eslint.org/docs/rules/comma-dangle' ] ]
------ Rules no errors -------
{
  "no-dupe-args": 2,
  "no-extra-boolean-cast": 2,
  "no-constant-condition": 2,
  "no-control-regex": 2,
  "no-debugger": 2,
  "no-cond-assign": 2,
  "no-duplicate-case": 2,
  "no-empty-character-class": 2,
  "no-empty": 2,
  "no-ex-assign": 2
}
```
