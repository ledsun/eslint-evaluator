import {
  Writable
}
from 'stream'

export default class extends Writable {
  constructor(rules) {
    super({
      objectMode: true
    })

    this.resultCount = new Map(rules.reduce((a, b) => {
      a.push([b, {
        count: 0,
        files: new Set()
      }])
      return a
    }, []))

  }
  _write(chunk, encoding, next) {
    let map = this.resultCount

    chunk.errors.forEach((e) => {
      if (e.fatal) {
        console.warn(e)
      } else {
        let val = map.get(e.ruleId)

        val.count++;
        val.files.add(chunk.filename)
        val.message = e.message

        // console.log(e);
      }
    })
    next()
  }
}
