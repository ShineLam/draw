<template lang="html">
  <div class="home">
    <ul>
      <li v-for="(staff, idx) in staffs" v-show="flag == idx">
        <img :src="staff.src" alt="">
        <p>{{staff.name}}</p>
      </li>
    </ul>
    <button type="button" @click="randoming">{{btnTxt}}</button>
    <div class="winner" v-show="winner">
      <p>恭喜<b> {{staff.name}} </b>童鞋</p>
      <p>记得认真准备下次的分享哦！</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      flag: 0,
      sOrE: true,
      winner: false,
      btnTxt: 'Start',
      r: '',
      staffs: [{
        name: '小黄',
        src: '/static/imgs/headshot-1.jpg'
      }, {
        name: '小曹',
        src: '/static/imgs/headshot-2.jpg'
      }, {
        name: '小刘',
        src: '/static/imgs/headshot-3.jpg'
      }, {
        name: '小钟',
        src: '/static/imgs/headshot-4.jpg'
      }, {
        name: '小王',
        src: '/static/imgs/headshot-5.jpg'
      }, {
        name: '小宋',
        src: '/static/imgs/headshot-6.jpg'
      }],
      staff: {}
    }
  },
  methods: {
    randomIdx () {
      let len = this.staffs.length
      let rn = Math.round(Math.random() * len)
      this.flag = rn
    },
    randoming () {
      if (this.sOrE) {
        this.r = setInterval(this.randomIdx, 100)
        this.btnTxt = 'End'
        this.sOrE = false
        this.winner = false
      } else {
        clearInterval(this.r)
        this.btnTxt = 'Start'
        this.sOrE = true
        this.winner = true
        this.staff = this.staffs[this.flag]
      }
    }
  }
}
</script>

<style lang="less">
.home {
  padding: 12px;
   ul {
     width: 80%;
     height: 3rem;
     margin: .5rem auto;
     position: relative;
     li {
       margin: 0 auto;
       position: absolute;
       left: 30%;
       p {
         font-size: .32rem;
       }
       img {
         width: 2rem;
         height: 2rem;
       }
     }
   }
   .winner {
     padding: 20px;
     text-align: center;
     b {
       font-size: .36rem;
       font-weight: 600;
     }
   }
   button {
     width: 80%;
     background: #1164ad;
     border-radius: 5px;
     color: #FFF;
     padding: 6px;
   }
}

</style>
