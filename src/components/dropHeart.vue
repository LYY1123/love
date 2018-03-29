<template>
  <div id="dropHeart"
       :v-if="show">
    <img src="../img/heart.png"
         alt=""
         v-for="(item,index) in heartList"
         :key="index"
         :style="{animationName: item.anmationName,animationDuration: item.anmationTime,animationDelay: item.anmationDelay}">
  </div>
</template>
<script>
export default {
  props: {
    show: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      heartList: []
    };
  },
  mounted () {
    this.start();
  },
  methods: {
    start () {
      let _this = this;
      let defaultNum = 50;
      for (var i = 0; i < defaultNum; i++) {
        let option = {};
        option.anmationName = 'dropHeartAnimation' + Math.ceil(Math.random() * 12);
        option.anmationDelay = 0 + 's';
        option.anmationTime = (Math.floor(Math.random() * 2) + 8) + 's';
        _this.heartList.push(option);
      }
    }
  }
};
</script>
<style lang="less" scoped>
  #dropHeart {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      img {
        display: block;
        position: absolute;
        top: -2rem;
        width: 1rem;
        height: auto;
        animation: dropHeartAnimation1 10s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      }
    }
</style>
