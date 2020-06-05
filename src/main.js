import Vue from 'vue'
import App from './App.vue'
import router from './router'



import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)



// import Print from 'vue-print-nb'
// Vue.use(Print)
// import vueQr from 'vue-qr'
// Vue.use(vueQr)

import Axios from 'axios'
Axios.defaults.baseURL = '/api'
//  Axios.defaults.baseURL = '/'
Axios.defaults.withCredentials = true
Axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'
Axios.interceptors.request.use(
  request => {
    let token = sessionStorage.getItem('token')
    if (token) {
      request.headers['Authorization'] = token;
    }
    return request;
  },
  error => {
    return Promise.reject(error);
  }
)
Vue.prototype.$axios = Axios

import store from './store' //引入store
if (sessionStorage.getItem("store")) {
  store.replaceState(
    Object.assign({},
      store.state,
      JSON.parse(sessionStorage.getItem("store"))
    )
  );
  sessionStorage.removeItem("store")
}
//监听，在页面刷新时将vuex里的信息保存到sessionStorage里
window.addEventListener("beforeunload", () => {
  sessionStorage.setItem("store", JSON.stringify(store.state));
})

Vue.prototype.submitForm = (formName, that) => {
  let state = true
  formName.forEach(element => {
    that.$refs[element].validate((valid) => {
      if (valid) {
        state = true
      } else {
        state = false
      }
    })
  })
  return state
}

Vue.prototype.resetForm = (formName, that) => {
  that.$nextTick(() => {
    formName.forEach(element => {
      that.$refs[element].resetFields(); //清除name
      // that.$refs[element].clearValidate(); //不清除name
    })
  })
}
Vue.prototype.randomNumber = () => { //生成随机编号
    let strNumber = '';
    let myDate = new Date();
    let year = myDate.getFullYear();
    let month = myDate.getMonth() + 1;
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    let day = myDate.getDate();
    if (day >= 0 && day <= 9) {
      day = "0" + day;
    }
    let rnd = "";
    for (let i = 0; i < 6; i++) {
      rnd += Math.floor(Math.random() * 10);
    }
    let yearStr = year.toString().substring(2, 4);
    strNumber = yearStr + month + day + rnd;
    return strNumber;
},

Vue.prototype.accAdd = function accAdd(arg1, arg2) {//加法
  if (arg1 == '' || arg1 == null) {
    arg1 = 0;
  }
  if (arg2 == '' || arg2 == null) {
    arg2 = 0;
  }
  var r1, r2, m, c;
  try {
    r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  c = Math.abs(r1 - r2);
  m = Math.pow(10, Math.max(r1, r2));
  if (c > 0) {
    var cm = Math.pow(10, c);
    if (r1 > r2) {
      arg1 = Number(arg1.toString().replace(".", ""));
      arg2 = Number(arg2.toString().replace(".", "")) * cm;
    } else {
      arg1 = Number(arg1.toString().replace(".", "")) * cm;
      arg2 = Number(arg2.toString().replace(".", ""));
    }
  } else {
    arg1 = Number(arg1.toString().replace(".", ""));
    arg2 = Number(arg2.toString().replace(".", ""));
  }
  return ((arg1 + arg2) / m).toFixed(2);
}
Vue.prototype.accSub = function accSub(arg1, arg2) { //减法
  if (arg1 == '' || arg1 == null) {
    arg1 = 0;
  }
  if (arg2 == '' || arg2 == null) {
    arg2 = 0;
  }
  var r1, r2, m, n;
  try {
    r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2)); // last modify by deeka //动态控制精度长度
  n = (r1 >= r2) ? r1 : r2;
  return ((arg1 * m - arg2 * m) / m).toFixed(2);
}
Vue.prototype.accMul = function accMul(arg1, arg2) {//乘法
  if (arg1 == '' || arg1 == null) {
    arg1 = 0;
  }
  if (arg2 == '' || arg2 == null) {
    arg2 = 0;
  }
  var m = 0,
    s1 = arg1.toString(),
    s2 = arg2.toString();
  try {
    m += s1.split(".")[1].length;
  } catch (e) {}
  try {
    m += s2.split(".")[1].length;
  } catch (e) {}
  return (Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)).toFixed(2);
}
Vue.prototype.accChu = function accChu(arg1, arg2) {//除法
  if (arg1 == '' || arg1 == null) {
    arg1 = 0;
  }
  if (arg2 == '' || arg2 == null) {
    arg2 = 0;
  }
  var m = 0,
    s1 = arg1.toString(),
    s2 = arg2.toString();
  try {
    m += s1.split(".")[1].length;
  } catch (e) {}
  try {
    m += s2.split(".")[1].length;
  } catch (e) {}
  return (Number(s1.replace(".", "")) / Number(s2.replace(".", "")) / Math.pow(10, m)).toFixed(2);
}

Vue.prototype.numberChinese=function numberChinese(str) {//金额转中文
  let num = parseFloat(str);
  let strOutput = "",
      strUnit = '仟佰拾亿仟佰拾万仟佰拾元角分';
  num += "00";
  let intPos = num.indexOf('.');  
  if (intPos >= 0){
      num = num.substring(0, intPos) + num.substr(intPos + 1, 2);
  }
  strUnit = strUnit.substr(strUnit.length - num.length);
  for (let i=0; i < num.length; i++){
      strOutput += '零壹贰叁肆伍陆柒捌玖'.substr(num.substr(i,1),1) + strUnit.substr(i,1);
  }
  return strOutput.replace(/零角零分$/, '整').replace(/零[仟佰拾]/g, '零').replace(/零{2,}/g, '零').replace(/零([亿|万])/g, '$1').replace(/零+元/, '元').replace(/亿零{0,3}万/, '亿').replace(/^元/, "零元")
}
// import VueQuillEditor from 'vue-quill-editor'
// import 'quill/dist/quill.core.css'
// import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'

// Vue.use(VueQuillEditor)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
