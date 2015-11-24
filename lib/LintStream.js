import {
  Transform
}
from 'stream'
import {
  linter
}
from 'eslint'

export default class extends Transform {
  constructor(defaultOptions, rules) {
    super({
      objectMode: true
    })
    this._defaultOptions = defaultOptions
    this._customOptions = {
      rules: rules.reduce((a, b) => {
        a[b] = 2
        return a
      }, {})
    }
  }
  _transform(chunk, enc, callback) {
    let errors = linter.verify(
      chunk.content,
      Object.assign({}, this._defaultOptions, this._customOptions),
      chunk.filename
    )

    this.push({
      filename: chunk.filename,
      errors: errors
    })

    callback()
  }
}
