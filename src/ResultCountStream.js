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
      a.push([b, 0])
      return a
    }, []))

  }
  _write(chunk, encoding, next) {
    let map = this.resultCount

    chunk.errors.forEach((e) => {
      if (e.fatal) {
        console.warn(e)
      } else {
        let ruleId = e.ruleId

        map.set(ruleId, map.get(ruleId) + 1)
      }
    })
    next()
  }
}
