
//时间格式化
export function dateFtt(fmt, date) { //author: meizz 
   var o = {
      "M+": date.getMonth() + 1, //月份 
      "d+": date.getDate(), //日 
      "h+": date.getHours(), //小时 
      "m+": date.getMinutes(), //分 
      "s+": date.getSeconds(), //秒 
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
      "S": date.getMilliseconds() //毫秒 
   };
   if (/(y+)/.test(fmt))
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
   for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt))
         fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
   return fmt;
}
//计算任务完成时间
export function getTaskTime(expectedTime) {

   var taskTime = formatTime(getNowFormatDate(), 2);

   var hopeSelect = expectedTime//期望时间的文本

   if (hopeSelect == "尽快" || hopeSelect == "今天" || hopeSelect == "电话联系"
      || hopeSelect == "") {
   } else if (hopeSelect == "明天") {
      var tomorrow = new Date(taskTime);
      var sDay = 1;
      taskTime = dateFtt('yyyy-MM-dd', new Date(tomorrow.setDate(tomorrow.getDate() + sDay)));
   } else if (hopeSelect == "后天") {
      var afterTomorrow = new Date(taskTime);
      var sDay = 2;
      taskTime = dateFtt('yyyy-MM-dd', new Date(afterTomorrow.setDate(afterTomorrow.getDate()
         + sDay)));
      console.log(taskTime);
   } else if (hopeSelect == "本周末") {
      var now = new Date();
      var day = now.getDay();
      var week = "1234567";
      var Saturday = 5 - week.indexOf(day);
      var satur = new Date();
      satur.setDate(satur.getDate() + Saturday);
      var sunday = 6 - week.indexOf(day);
      var sun = new Date();
      sun.setDate(sun.getDate() + sunday);
      taskTime = dateFtt('yyyy-MM-dd', new Date(sun));
   }
   return taskTime;
}
//自定义时间格式
export function formatTime(time, type) {
   // console.log(time);
   var getTime = '';
   // 格式1：月-日 时:分 01-01 00:00
   if (type == '1') {
      var month = time.split("-")[1];
      var date = time.split("-")[2].split(" ")[0];
      var hour = time.split("-")[2].split(" ")[1].split(":")[0];
      var minute = time.split("-")[2].split(" ")[1].split(":")[1];
      getTime = month + "-" + date + " " + hour + ":" + minute;
   }
   // 格式2：年-月-日 2016-01-01
   if (type == '2') {
      var year = time.split("-")[0];
      var month = time.split("-")[1];
      var date = time.split("-")[2].split(" ")[0];
      getTime = year + "-" + month + "-" + date;
   }
   // 格式3：年月日时分秒 201601010000
   if (type == '3') {
      var year = time.split("-")[0];
      var month = time.split("-")[1];
      var date = time.split("-")[2].split(" ")[0];
      var hour = time.split("-")[2].split(" ")[1].split(":")[0];
      var minute = time.split("-")[2].split(" ")[1].split(":")[1];
      var second = time.split("-")[2].split(" ")[1].split(":")[2];
      getTime = year + month + date + hour + minute + second;
   }

   if (type == '4') {
      var year = time.split("-")[0];
      var month = time.split("-")[1];
      var date = time.split("-")[2].split(" ")[0];
      var hour = time.split("-")[2].split(" ")[1].split(":")[0];
      var minute = time.split("-")[2].split(" ")[1].split(":")[1];
      var second = time.split("-")[2].split(" ")[1].split(":")[2];
      getTime = year + "年" + month + "月" + date + "日 " + hour + ":" + minute;
   }

   if (type == '5') {
      var year = time.split("-")[0];
      var month = time.split("-")[1];
      var date = time.split("-")[2].split(" ")[0];
      var hour = time.split("-")[2].split(" ")[1].split(":")[0];
      var minute = time.split("-")[2].split(" ")[1].split(":")[1];
      var second = time.split("-")[2].split(" ")[1].split(":")[2];
      getTime = year + "年" + month + "月" + date + "日 " + hour + ":" + minute + ":" + second;
   }
   // 格式6：时分秒 000000
   if (type == '6') {
      var year = time.split("-")[0];
      var month = time.split("-")[1];
      var date = time.split("-")[2].split(" ")[0];
      var hour = time.split("-")[2].split(" ")[1].split(":")[0];
      var minute = time.split("-")[2].split(" ")[1].split(":")[1];
      var second = time.split("-")[2].split(" ")[1].split(":")[2];
      getTime = hour + minute + second;
   }


   return getTime;
}
// 获取当前时间
function getNowFormatDate() {
   var date = new Date();
   var month = date.getMonth() + 1;
   var strDate = date.getDate();
   var hours = date.getHours();
   var minutes = date.getMinutes();
   var seconds = date.getSeconds();
   if (month >= 1 && month <= 9) {
      month = "0" + month;
   }
   if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
   }
   if (hours >= 0 && hours <= 9) {
      hours = "0" + hours;
   }
   if (minutes >= 0 && minutes <= 9) {
      minutes = "0" + minutes;
   }
   if (seconds >= 0 && seconds <= 9) {
      seconds = "0" + seconds;
   }
   var currentdate = date.getFullYear() + "-" + month + "-" + strDate + " "
      + hours + ":" + minutes + ":" + seconds;
   return currentdate;
}
export function taskCostTime(t1, t2) {
   var costTime = '';
   t2 = t2 == undefined ? getNowFormatDate() : t2;

   t1 = new Date(t1);
   t2 = new Date(t2);
   t1 = t1.getTime();
   t2 = t2.getTime();
   var subTime = parseInt((t2 - t1) / 1000 / 60);
   if (subTime < 60) {
      costTime = subTime + "分";
      return costTime;
   }

   if ((subTime / 60) >= 1 && (subTime / 60 / 24) < 1) {
      if (subTime % 60 > 0) {
         costTime = (subTime / 60).toString().split(".")[0] + "小时" + (subTime % 60) + "分";
      } else {
         costTime = (subTime / 60) + "小时";
      }
      return costTime;
   }
   if ((subTime / 60 / 24) >= 1) {
      if (parseInt(subTime / 60) % 24 >= 1) {
         costTime = (subTime / (60 * 24)).toString().split(".")[0] + "天" + (parseInt(subTime / 60) % 24) + "小时";
      } else {
         costTime = parseInt(subTime / (60 * 24)) + "天";
      }
      return costTime;
   }
}
//根据id获取部门和门店id
export function getUserId(arr, opt) {
   let res = []
   for (let i in arr) {
      for (let item of opt) {
         if (arr[i] == item.userCoding) {
            let demo = [item.storefrontId, item.departmentId, item.userCoding]
            res.push(demo)
         }
      }
   }
   return res
}
//根据id获取部门和门店id
export function getUserId2(arr, id) {
   var demo;
   for (let item of arr) {
      if (item.userCoding == id) {
         demo = [item.storefrontId, item.departmentId, item.userCoding]

      }
   }
   return demo
}
//获取星期几
export function getMyDay(date){
   let week;
   if(date.getDay()==0) week="星期日";
   if(date.getDay()==1) week="星期一";
   if(date.getDay()==2) week="星期二";
   if(date.getDay()==3) week="星期三";
   if(date.getDay()==4) week="星期四";
   if(date.getDay()==5) week="星期五";
   if(date.getDay()==6) week="星期六";
   return week;
}
//根据id获取名字
export function gerUserName(val, opt) {
   let username = ""
   for (let item of opt) {
      if (val == item.userCoding) {
         username = item.suStaffName;
         break;
      }
   }
   return username
}
//生成审批编号
export function approvalNumber() {
   var strNumber = '';
   var myDate = new Date();
   var year = myDate.getFullYear();
   var month = myDate.getMonth() + 1;
   if (month >= 1 && month <= 9) {
      month = "0" + month;
   }
   var day = myDate.getDate();
   if (day >= 0 && day <= 9) {
      day = "0" + day;
   }
   var rnd = "";
   for (var i = 0; i < 6; i++) {
      rnd += Math.floor(Math.random() * 10);
   }
   var yearStr = year.toString().substring(2, 4);
   strNumber = yearStr + month + day + rnd;
   return strNumber;
}
/**
 * 加法函数，用来得到精确的加法结果
 * 说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。 
 * 调用：accAdd(arg1,arg2) 
 * 返回值：arg1加上arg2的精确结果
 */
export function accAdd(arg1, arg2) {
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
/**
 * 减法函数，用来得到精确的减法结果 
 * 说明：javascript的减法结果会有误差，在两个浮点数相减的时候会比较明显。这个函数返回较为精确的减法结果。
 * 调用：accSub(arg1,arg2)
 * 返回值：arg1减去arg2的精确结果
 */
export function accSub(arg1, arg2) {
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

//去掉JSON字符串头尾的双引号
String.prototype.getRealJsonStr = function () {
   return this.substring(1, this.length - 1);
}
//计费方案 计算水电气收费
export function powerCalculate(step_arr, total_num) {
   if (step_arr === "") {
      return 0;
   }
   step_arr = eval("(" + step_arr + ")");
   var baseMoney = step_arr.baseMoney; //基础计费
   var ladder = step_arr.ladder; //阶梯方案
   var total_price = 0; //计费值
   //变量step_chosen就是一共需要爬梯的数量
   var step_chosen = undefined;
   //1、先求出，可以最多使用到哪一个阶梯
   for (var i = 0; i < ladder.length; i++) {
      if (parseInt(total_num) < parseInt(ladder[i].step)) {
         if (accSub(ladder[i].step, total_num) < 1) {
            step_chosen = i + 1;
            break;
         } else {
            step_chosen = i;
            break;
         }
      }
   } //0-10   11-00
   if (step_chosen == undefined) {
      //2、如果数量级超过最大阶梯的话
      step_chosen = ladder.length;
   } else {
      //3、如果数量级不超过最大阶梯的话，值不变

   }
   //变量step_chosen就是一共需要爬梯的数量	
   for (var i = 0; i < step_chosen; i++) {
      if (step_chosen == 1) { //如果只有一阶，直接计算
         total_price += total_num * ladder[0].price;
      } else {
         if (i == (step_chosen - 1)) {

            total_price = accAdd(total_price, ((total_num - ladder[i].step + 1) * ladder[i].price));
         } else {
            if (ladder[i].step == 0) {
               total_price = accAdd(total_price, ((ladder[i + 1].step - ladder[i].step - 1) * ladder[i].price));
            } else {
               total_price = accAdd(total_price, ((ladder[i + 1].step - ladder[i].step) * ladder[i].price));
            }
         }
      }
   }
   return accAdd(baseMoney, total_price);
}