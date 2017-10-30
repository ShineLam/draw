<template lang="html">
  <div class="draw-footer">
    <a href="#" v-for="(item, i) in btn" @click="go(item.name, i)" :class="flag == i ? 'active' : ''">{{item.name}}</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      btn: [{
        name: 'home'
      }, {
        name: 'record'
      }],
      flag: 0
    }
  },
  methods: {
    go (path, i) {
      this.goto(path)
      this.flag = i
    }
  }
}
</script>

<style lang="less">
@import '../../styles/main.less';
.draw-footer {
  display: flex;
  width: 100%;
  border: 1px solid #CCC;
  border-width: 1px 0 1px 0;
  padding: 3px;
  position: fixed;
  bottom: 0;
  a {
    flex: 1;
    text-align: center;
    padding: .1rem;
    color: #CCC;
    &+a {
      border-left: 1px solid #CCC;
    }
    &.active {
      color: @mainColor;
    }
  }
}
</style>
