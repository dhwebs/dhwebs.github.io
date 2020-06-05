<template>
<div>
  <div class="box">
    <div class="imgbox">
      <img src="https://pic-static.fangzhizun.com/images/404.a57b6f31.png" alt="">
    </div>
    <div class="pbox">
      <p>糟糕 ! ! !</p>
      <p>网站管理员说您无法进入此页面</p>
      <p>请检查您输入的URL是否正确</p>
    </div>
  </div></div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
    .box{
      height: 100vh;
      margin: 0 auto;
      // padding-top: 10%;
      width: 80%;
      display:flex;
      // justify-content: center;
      align-items: center;
      .imgbox{
        flex:2;
        img{
          width: 100%;
        }
      }
      .pbox{
        flex:1;
        p:nth-child(1){
          font-size: 40px;
          color: #0099ff;
        }
        p:nth-child(2){
          font-size: 30px;
          color: #666;
        }
        p:nth-child(3){
          font-size: 20px;
          color: #666;
        }
      }
    }
</style>