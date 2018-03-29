<template>
  <div id="tree"
       v-if="showFlag">
    <!-- 树主干 -->
    <div class="tree-main"
         :class="{'start': mainStart}">

      <!-- 树枝 -->
      <div class="tree-branch"
           :class="{'start': branchStart}">
        <div class="line"
             :class="{'start': lineStart}">
          <img src="../img/love.jpg"
               alt="爱情">
        </div>
      </div>
      <div class="tree-branch"
           :class="{'start': branchStart}">
        <div class="line"
             :class="{'start': lineStart}">
          <img src="../img/love2.jpg"
               alt="爱情">
        </div>
      </div>
      <!-- 树枝end -->
    </div>
    <!-- 树主干end -->
  </div>
</template>
<script>
export default {
  props: {
    showFlag: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      mainStart: 0,
      branchStart: 0,
      lineStart: 0
    };
  },
  watch: {
    showFlag (n, o) {
      let _this = this;
      if (n === 1) {
        setTimeout(function () {
          _this.growStart();
        }, 500);
      }
    }
  },
  methods: {
    growStart () {
      let _this = this;
      setTimeout(function () {
        _this.mainStart = 1;

        setTimeout(function () {
          _this.branchStart = 1;

          setTimeout(function () {
            _this.lineStart = 1;
          }, 3000);
        }, 3000);
      }, 500);
    }
  }
};
</script>
<style lang="less" scoped>
   @keyframes rotateMation1
  {
    0% {
      transform: rotate(90deg);
    }
    100% {
      transform: rotate(15deg);
    }
  }
  @keyframes rotateMation2
  {
    0% {
      transform: rotate(-15deg);
    }
    100% {
      transform: rotate(-75deg);
    }
  }
  #tree {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    .tree-main {
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 1rem;
      height: 0rem;
      background-color: #000;
      transition: all 3s;
      transform: translateX(-50%);
      .tree-branch {
        position: absolute;
        left: 0;
        top: 0;
        width: 1rem;
        height: 0rem;
        background-color: #000;
        transform: scale(0.7);
        transition: all 3s;
        transform: scale(0.7) rotate(-45deg);
        transform-origin: 1rem bottom;
        .line {
          position: absolute;
          top: 0;
          width: 2px;
          height: 5rem;
          background-color: #000;
          opacity: 0;
          transition: all 0.5s;
          img {
            display: block;
            position: absolute;
            left: 50%;
            bottom: -0.8rem;
            width: 1rem;
            height: auto;
            transform: translateX(-50%);
            border:1px solid #BFBFBF;
            box-shadow:2px 2px 3px #aaaaaa;
          }
        }
        .line.start {
          opacity: 1;
        }
      }
      .tree-branch:first-child {
        .line {
          left: 0;
          transform-origin: 0 0.7rem;
          transform: rotate(45deg);
          animation: rotateMation1 1s infinite alternate;
        }
      }
      .tree-branch:last-child {
        transform-origin: 0 bottom;
        transform: scale(0.7) rotate(45deg);
        .line {
          right: 0;
          transform-origin: 0 0.7rem;
          transform: rotate(-45deg);
          animation: rotateMation2 1s infinite alternate;
        }
      }
      .tree-branch.start {
        top: -5rem;
        height: 5rem;
      }
    }
    .tree-main.start {
      height: 5rem;
    }
  }
  @media screen and (max-width: 1024px) {
    #tree {
      .tree-main {
        .tree-branch {
          .line {
            height: 15rem;
            img {
              width: 3rem;
            }
          }
        }
        .tree-branch.start {
          top: -15rem;
          height: 15rem;
        }
      }
      .tree-main.start {
        height: 15rem;
      }
    }
  }
</style>
