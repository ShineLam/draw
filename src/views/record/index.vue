<template lang="html">
  <div class="records">
    <button type="button" @click="clearRecord">clear</button>
    <ul>
      <li v-for="item in records">
        <span>{{item.today}}</span>
        <i>{{item.name}}</i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      records: []
    }
  },
  created () {
    this.getRecord()
  },
  methods: {
    getRecord () {
      if (window.localStorage.draw_record) {
        const records = JSON.parse(window.localStorage.draw_record)
        this.records = records
        console.log(records)
      }
    },
    clearRecord () {
      this.records = []
      window.localStorage.clear()
    }
  }
}
</script>

<style lang="less">
.records {
  ul {
    li {
      margin: .2rem auto;
      span,i {
        display: inline-block;
        min-width: 2rem;
      }
    }
  }
  button {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: fixed;
    top: -.15rem;
    right: -.15rem;
  }
}
</style>
