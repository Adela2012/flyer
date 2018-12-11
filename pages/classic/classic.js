// pages/classic/classic.js
import ClassicModel from '../../models/classic.js'
import LikeModel from '../../models/like.js'

const classicModel = new ClassicModel()
const likemodel = new LikeModel()

Component({
  properties: {
    cid: Number,
    type: Number
  },

  data: {
    classic: null,
    lastest: true,
    first: false,
    likeCount: 0,
    likeStatus: false
  },

  attached(options) {
    const {cid, type} = this.properties
    if(!cid) {
      classicModel.getLatest().then(res => {
        this.setData({
          classic: res,
          likeCount: res.fav_nums,
          likeStatus: res.like_status
        })
      })
    } else {

    }
  },

  methods: {

  }
})