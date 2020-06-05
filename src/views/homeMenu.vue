<template>
  <div>
    <el-carousel height="110vh" direction="vertical" :autoplay="false" ref='carousel' indicator-position='none'>
      <el-carousel-item>
        <div class="firstBox">
          <el-row style="height:70%;opacity:0.8" :gutter="20" v-if="index==0">
            <el-col :span="8" v-for="(item,i) in imgList" :key="i">
              <el-image class="animated pulse" :src="item"></el-image>
            </el-col>
          
          </el-row>
          <div>

          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="secondBox">
          
          <div>

          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="thirdBox">
        
          <div>

          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="fourthBox">
          
          <div>

          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="box-card">
      <p @click="setActiveItem(0)" :style="{background:index==0?'rgba(165, 151, 247, 0.653)':'',color:index==0?'#fff':'#000'}">首页</p>
      <p @click="setActiveItem(1)" :style="{background:index==1?'rgba(165, 151, 247, 0.653)':'',color:index==1?'#fff':'#000'}">第二</p>
      <p @click="setActiveItem(2)" :style="{background:index==2?'rgba(165, 151, 247, 0.653)':'',color:index==2?'#fff':'#000'}">第三</p>
      <p @click="setActiveItem(3)" :style="{background:index==3?'rgba(165, 151, 247, 0.653)':'',color:index==3?'#fff':'#000'}">第四</p>
      <p @click="drawer=true">更多...</p>
    </div>
    <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false">
      <div style="width:100%">
        <img  class="animated bounce" style="display:block;margin:10px auto;width:100px;height:100px;border-radius:50%" src="../assets/images/XQ2.jpg" alt="">
      </div>
    </el-drawer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        imgList:[
          require('../assets/images/XQ2.jpg'),
          require('../assets/images/XQ3.jpg'),
          require('../assets/images/XQ4.jpg'),
        ],
        index:0,
        drawer:false,
        drawer1:true
      }
    },
    created(){

    },
    methods: {
      setActiveItem(index){
        this.index=index
        this.$refs.carousel.setActiveItem(index)
      }
      
    },
  }
</script>
<style lang="scss">
 html,body {
    padding: 0;
    margin: 0;
    border: none;
  }
::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
//滚动条的滑块
::-webkit-scrollbar-thumb {
  background-color: #a1a3a9;
  border-radius: 5px;
}
</style>
<style lang="scss" scope>
  html,body {
    // margin-top: -20px;
    // height: calc(100vh + 40px);
    border: none;
    overflow: hidden;
  }
  .firstBox{
    height: 100%;
    width: 100%;
    background:rgba(151, 247, 197, 0.183);
    img{
      height:100%;
      width: 100%;
    }
    // &::before{
    //   display: block;
    //   height: 100vh;
    //   background: url('../assets/images/banner02.png') no-repeat;
    //   background-size: 100% 100%;
    //   content: "";  /* 这个不要漏了 */
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   z-index: 1; /*-1 可以当背景*/
    //   opacity:0.5
    // }
  }
  .secondBox{
    height: 100%;
    background:rgba(151, 245, 247, 0.183);
  }
  .thirdBox{
    height: 100%;
    background:rgba(151, 218, 247, 0.183);
  }
  .fourthBox{
    height: 100%;
    background:rgba(151, 172, 247, 0.183);
  }
  .box-card {
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    width: 200px;
    background: rgba(0, 0, 0, 0.04);
    position: fixed;
    top: 30%;
    left: 100px;
    z-index: 999;
    p{
      padding: 10px 0;
      margin:10px 0;
      text-align: center;
      cursor: pointer;
      &:hover{
        background-color: rgba(165, 151, 247, 0.653);
      }
    }
  }

</style>
