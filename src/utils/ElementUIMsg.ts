import { ElMessage } from 'element-plus';


// 为了实现Class的私有属性
const showMessage = Symbol('showMessage')
/** 
 *  重写ElementUI的Message
 *  single默认值true，因为项目需求，默认只弹出一个，可以根据实际需要设置
 */
class Message {
  success(options: any, single = true) {
    this[showMessage]('success', options, single)
  }
  warning(options: any, single = true) {
    this[showMessage]('warning', options, single)
  }
  info(options: any, single = true) {
    this[showMessage]('info', options, single)
  }
  error(options: any, single = true) {
    this[showMessage]('error', options, single)
  }
  [showMessage](type: string | number, options: any, single: any) {
    console.log(type, options, single)
    if (single) {
      // 判断是否已存在Message
      if (document.getElementsByClassName('el-message').length === 0) {
        if (typeof options === 'string') {
          ElMessage[type]({ message: options, duration: 1500 })
        } else {
          ElMessage[type](options)
        }
      }
    } else {
      if (typeof options === 'string') {
        ElMessage[type]({ message: options, duration: 1500 })
      } else {
        ElMessage[type](options)
      }
    }
  }
}

// 成功调用方式：proxy.$message.success(options);
// 失败调用方式：proxy.$message.error(options);
// 警告调用方式：proxy.$message.warning(options);
// 提示调用方式：proxy.$message.info(options);


export default new Message();
