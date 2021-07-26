const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
let _cloud = cloud
_cloud.db = cloud.database()
_cloud._ = _cloud.db.command
_cloud.$ = _cloud._.aggregate
 

class BaseController {
  constructor( ) {
    this.cloud  = _cloud
  }
  /**
   * success
   */
  success(data){
    return {
      status:0,
      data,
      message:''
    }
  }
  fail(status = -1, message = 'api error', data = {}) {
    return { message, status, data }
  }
}

module.exports = BaseController 