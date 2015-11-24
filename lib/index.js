import fs from 'fs'
import minimist from 'minimist'
import rules from './rules'
import ReadStreamFilesReadable from './ReadStreamFilesReadable'
import LintStream from './LintStream'
import ResultCountStream from './ResultCountStream'

let argv = minimist(process.argv.slice(2))

fs.readFile(argv.c, 'utf8', dolint)

function dolint(err, data) {
  if (err) throw err

  const existsOpitons = JSON.parse(data)
  let additionalRules = rules.filter(r => existsOpitons.rules[r] === undefined)

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
    if (a[1].count < b[1].count)
      return -1
    else if (b[1].count < a[1].count)
      return 1
    return 0
  })

  // has error
  console.log('------ Rules have errors -------')
  console.log(resultArray
    .filter(r => r[1].count > 0)
    .map(r => {
      let val = r[1]
      return [
        val.count,
        r[0],
        // val.files,
        val.message,
        `http://eslint.org/docs/rules/${r[0]}`
      ]
    }))

  //ligth
  console.log('------ Rules have three error -------')
  logJson(resultArray
    .filter(r => r[1].count === 3))

  console.log('------ Rules have two error -------')
  logJson(resultArray
    .filter(r => r[1].count === 2))

  console.log('------ Rules have one error -------')
  logJson(resultArray
    .filter(r => r[1].count === 1))

  //safe
  console.log('------ Rules no errors -------')
  logJson(resultArray
    .filter(r => r[1].count === 0))
}

function logJson(array) {
  let hash = array.reduce((a, b) => {
    a[b[0]] = 2
    return a
  }, {})

  console.log(JSON.stringify(hash, null, 2));
}
