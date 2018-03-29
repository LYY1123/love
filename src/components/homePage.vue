<template>
  <div id="homePage">
    <!-- 下心 -->
    <dropHeart :show="dropHeartShowFlag"/>
    <!-- 下心end -->
    <!-- 落心部分 -->
    <div class="topHeartList"
         :class="hidden"
         v-if="showHeart">
      <img class="heartSmall"
           src="../img/heart.png"
           v-for="(item,index) in heartList"
           :key="index"
           :class="item.className"
           :style="{left: item.left,'animationDelay': item.delay }">
      <div class="heartBigwRapper"
           @click="clickMe">
        <img class="heartBig ts-5"
             :class="changeBigCLass"
             src="../img/heart.png">
        <p class="clickMe"
           :class="showText">老婆，点一下试试</p>
      </div>
    </div>
    <!-- 落心end -->
    <!-- 表白部分 -->
    <div class="sayLove"
         :class="{'hidden': showLoveTree}"
         v-if="professStart">
      <div class="wrapper">
        <p class="sayLove-say">
          <span class="I"
                :class="{'flyin': flyin}">I</span>
          <span class="love"
                :class="{'flyin': flyin}">Love</span>
          <span class="you"
                :class="{'flyin': flyin}">You</span>
        </p>
        <p class="askLove"
           :class="{'fadeIn': askLoveShowFlag,'textFlicker': askLoveAnimationFlag}">Do you love me ?</p>
      </div>
    </div>
    <!-- 表白end -->
    <!-- 爱情树 -->
    <tree :showFlag="showLoveTree"/>
    <!-- 爱情树 -->
    <!-- 背景音乐 -->
    <audio src="../music/bamingdougeinile.mp3"
           autoplay
           loop
           class="audio-bg">
      您的浏览器不支持背景音乐播放。
    </audio>
    <!-- 背景音乐end -->
  </div>
</template>
<script>
import dropHeart from './dropHeart.vue';
import tree from './tree.vue';

export default {
  name: 'HomePage',
  components: {
    dropHeart,
    tree
  },
  data () {
    return {
      showHeart: 1,
      heartList: [],
      changeBigCLass: '',
      showText: '',
      hidden: '',
      flyin: 0,
      askLoveShowFlag: 0,
      askLoveAnimationFlag: 0,
      dropHeartShowFlag: 1,
      professStart: 0,
      showLoveTree: 0
    };
  },
  mounted () {
    this.creatHeartList();
  },
  methods: {
    creatHeartList () {
      let _this = this;
      let total = 20;
      let rotate = 0;
      for (var i = 0; i < total; i++) {
        let option = {};
        rotate = Math.ceil(Math.random() * 4) * 10;
        if (i % 4 == 0) {
          option.className = 'ts-' + rotate + '-n';
        } else {
          option.className = 'ts-' + rotate;
        }
        option.left = i * 5 + '%';
        option.delay = (2 + Math.floor(Math.random() * 9)) + 's';
        this.heartList.push(option);
      }
      function quicken (speed = 8, time = 5000) {
        if (speed < 3) {
          return;
        }
        setTimeout(function () {
          if (speed < 8) {
            _this.changeBigCLass = 'changeBig speed-' + speed;
          } else {
            _this.changeBigCLass = 'changeBig';
          }
          quicken(speed - 1, 1000);
        }, time);
      }
      quicken();
      setTimeout(function () {
        _this.showText = 'show';
      }, 13000);
    },
    clickMe () {
      let _this = this;
      if (_this.showText !== 'show') {
        return;
      }
      this.hidden = 'hidden';
      setTimeout(function () {
        _this.showHeart = 0;
        _this.showLove();
      }, 1000);
    },
    showLove () {
      let _this = this;
      _this.professStart = 1;
      setTimeout(function () {
        _this.showLoveAnimation();
      }, 1000);
    },
    showLoveAnimation () {
      let _this = this;
      _this.flyin = 1;
      setTimeout(function () {
        _this.askLoveShowFlag = 1;
        setTimeout(function () {
          _this.askLoveAnimationFlag = 1;
          setTimeout(function () {
            _this.showLoveTree = 1;
          }, 3000);
        }, 1000);
      }, 1000);
    }
  }
};
</script>
<style lang="less" scoped>
  // 旋转不同角度的类
  .ts-5{
    transform: rotate(5deg);
  }
  .ts-10{
    transform: rotate(10deg);
  }
  .ts-20{
    transform: rotate(20deg);
  }
  .ts-30{
    transform: rotate(30deg);
  }
  .ts-40{
    transform: rotate(40deg);
  }
  .ts-5-n{
    transform: rotate(-5deg);
  }
  .ts-10-n{
    transform: rotate(-10deg);
  }
  .ts-20-n{
    transform: rotate(-20deg);
  }
  .ts-30-n{
    transform: rotate(-30deg);
  }
  .ts-40-n{
    transform: rotate(-40deg);
  }

  // 移动距离
  .trasnlate-y-30-n {
    transform: translate3d(0,-30%,0);
  }
  // 心掉落动画
  @keyframes dropAnimation
  {
    to {
      left: 50%;
      top: 50%;
      transform: translate3d(-50%,-50%,0);
    }
  }
  // 大心闪烁动画
  @keyframes flickerAnimation
  {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.1);
    }
  }
  // 提示文字闪烁动画
   @keyframes textFlicker
  {
    0% {
      transform: translate(0);
    }
    50% {
      transform: translate3d(-5%,0,0);
    }
    100% {
      transform: translate3d(5%,0,0);
    }
  }

  #homePage {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .topHeartList {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 1;
      transition: all 1s;
      .list {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
      }
      .heartSmall {
        display: inline-block;
        position: absolute;
        left: 0;
        top: -0.2rem;
        flex: 1;
        width: 1rem;
        height: auto;
        animation: dropAnimation 3s 1;
      }
      .heartBigwRapper {
        position: absolute;
        left: 50%;
        top: 50%;
        text-align: center;
        transform: translate3d(-50%,-50%,0);
        cursor: pointer;
        .clickMe {
          display: none;
          font-size: 0.5rem;
        }
        .clickMe.show {
          display: block;
          animation: textFlicker 0.8s infinite;
          animation-direction:alternate;
        }
      }
      .heartBig {
        width: 1rem;
        height: auto;
        transition: all 13s;
        animation: flickerAnimation 0.8s infinite;
      }
      .heartBig.speed-7 {
        animation: flickerAnimation 0.7s infinite;
      }
      .heartBig.speed-6 {
        animation: flickerAnimation 0.6s infinite;
      }
      .heartBig.speed-5 {
        animation: flickerAnimation 0.5s infinite;
      }
      .heartBig.speed-4 {
        animation: flickerAnimation 0.4s infinite;
      }
      .heartBig.speed-3 {
        animation: flickerAnimation 0.3s infinite;
      }.changeBig {
        width: 2rem;
      }
    }
    .topHeartList.hidden {
      opacity: 0;
    }
    .sayLove {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: all 0.5s;
      .wrapper {
        span {
          display: inline-block;
          opacity: 0;
          transition: all 1s;
        }
        .I {
          transform: translate3d(-1000px,0,0);
        }
        .love {
          transform: translate3d(0,-1000px,0);
        }
        .you {
          transform: translate3d(1000px,0,0);
        }
        span.flyin {
          opacity: 1;
          transform: translate3d(0,0,0);
        }

        .askLove {
          opacity: 0;
          transition: all 1s;
        }
        .askLove.fadeIn {
          opacity: 1;
        }
        .askLove.textFlicker {
          animation: textFlicker 1s infinite;
        }
      }
    }
    .sayLove.hidden{
      opacity: 0;
    }
    .audio-bg {
      position: absolute;
      left: 0;
      top: 0;
    }
  }
</style>
