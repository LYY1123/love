<template>
  <div id="appPage">
    <keep-alive >
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'AppPage',
  components: {
  },
  data () {
    return {

    };
  },
  computed: {

  },
  methods: {

  }
};
</script>
<style lang="less" scoped>
#appPage {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
