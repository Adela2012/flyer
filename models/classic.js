import {HTTP} from '../util/http.js'

export default class ClassicModel extends HTTP {
  getLatest() {
    return this.request({
      url: 'classic/latest'
    })
  }
}
