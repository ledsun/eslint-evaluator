import fs from 'fs'
import minimist from 'minimist'
import ReadStreamFilesReadable from './src/ReadStreamFilesReadable'
import LintStream from './src/LintStream'
import ResultCountStream from './src/ResultCountStream'

const rules = [
  'comma-dangle',
  'no-cond-assign',
  'no-console',
  'no-constant-condition',
  'no-control-regex',
  'no-debugger',
  'no-dupe-args',
  'no-dupe-keys',
  'no-duplicate-case',
  'no-empty-character-class',
  'no-empty',
  'no-ex-assign',
  'no-extra-boolean-cast',
  'no-extra-parens',
  'no-extra-semi',

]

let argv = minimist(process.argv.slice(2))

fs.readFile(argv.c, 'utf8', dolint)

function dolint(err, data) {
  if (err) throw err

  const existsOpitons = JSON.parse(data)
  let additionalRules = rules.filter(r => existsOpitons.rules[r] !== 2)

  argsToStream(argv)
    .pipe(new LintStream(existsOpitons, additionalRules))
    .pipe(new ResultCountStream(additionalRules))
    .on('finish', outputResult)
}

function argsToStream(argv) {
  if (argv._) {
    let dir = argv._[0]

    return new ReadStreamFilesReadable(dir)
  }
}

function outputResult() {
  let resultArray = Array.from(this.resultCount)

  resultArray.sort((a, b) => {
    if (a[1] < b[1])
      return -1
    else if (b[1] < a[1])
      return 1
    return 0
  })

  // has error
  console.log('------ Rules have errors -------')
  console.log(resultArray
    .filter(r => r[1] > 0)
    .map(r => {
      return [r[1], r[0], `http://eslint.org/docs/rules/${r[0]}`]
    }))

  //safe
  console.log('------ Rules no errors -------')
  let safeRule = resultArray
    .filter(r => r[1] === 0)
    .reduce((a, b) => {
      a[b[0]] = 2
      return a
    }, {})

  console.log(JSON.stringify(safeRule, null, 2));
}
