<template lang="html">
  <div class="home">
    <ul>
      <li v-for="(staff, idx) in staffs" v-show="flag == idx">
        <img :src="'./static/imgs/headshot-' + staff.img + '.jpg'" alt="">
        <p>{{staff.name}}</p>
      </li>
    </ul>
    <button type="button" @click="randoming">{{btnTxt}}</button>
    <div class="winner" v-show="winner">
      <p>恭喜<b> {{staff.department}}-{{staff.name}} </b>童鞋!</p>
      <p>记得认真准备下次的分享哦！</p>
    </div>
  </div>
</template>

<script>
import staffs from '../../../static/data/staffs.json'
import '../../utils/common.js'
var record = []
export default {
  data () {
    return {
      flag: 0,
      sOrE: true,
      winner: false,
      btnTxt: 'Start',
      r: '',
      today: new Date().format('yyyyMMdd'),
      staffs: [],
      staff: {}
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.staffs = staffs
    },
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
        this.staff.today = this.today
        record.push(this.staff)
        window.localStorage.draw_record = JSON.stringify(record)
      }
    }
  }
}
</script>

<style lang="less">
@import "../../styles/main.less";
.home {
  padding: 14px;
   ul {
     width: 100%;
     height: 3rem;
     margin: .5rem auto;
     position: relative;
     li {
       margin: 0 auto;
       position: absolute;
       left: 0;
       right: 0;
       top: 0;
       bottom: 0;
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
