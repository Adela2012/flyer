import {
  HTTP
} from '../util/http.js'

export default class LikeModel extends HTTP {
  like (behavior, artID, category) {
    this.request({
      url: behavior == 'like' ? 'like' : 'like/cancel',
      method: 'POST',
      data: {
        art_id: artID,
        type: category
      }
    })
  }

  getClassicLikeStatus(artID, category, sCallback) {
    this.request({
      url: 'classic/' + category + '/' + artID + '/favor',
      success: sCallback
    })
  }
}
