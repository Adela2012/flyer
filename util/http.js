import config from '../config.js'

const TIPS_MAP = {
  1: '抱歉，出现了一个错误',
  1005: 'appkey无效，请前往www.7yue.pro申请',
  3000: '期刊不存在'
}

export class HTTP {
  request({ url, data = {}, method = 'GET' }) {
    return new Promise((resolve, reject) => {
      this._request(url, resolve, reject, data, method)
    })
  }

  _request(url, resolve, reject, data = {}, method = 'GET') {
    wx.request({
      url: config.api_base_url + url,
      method: method,
      data: data,
      header: {
        'content-type': 'application/json',
        'appkey': config.appkey
      },
      success: (res) => {
        const code = res.statusCode.toString()
        if (code.startWith('2')) {
          resolve(res.data)
        } else {
          reject()
          this._show_error(res.data.error_code)
        }
      },
      fail: (err) => {
        reject()
        this._show_error()
      }
    })
  }
  _show_error(error_code = 1) {
    wx.showToast({
      title: TIPS_MAP[error_code],
      icon: 'none',
      duration: 2000
    })
  }
}
