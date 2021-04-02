<template lang='pug'>
  section.container
    Card(:number='currentDays' label='Days')
    Card(:number='currentHours' label='Hours')
    Card(:number='currentMinutes' label='Minutes')
    Card(:number='currentSeconds' label='Seconds')
</template>

<script>
import Card from '@/components/Card'

const TIME = 60 * 60 * 24 * 3

const SECOND = 1
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24

export default {
  name: 'CountDownTimer',
  components: {
    Card
  },
  data () {
    return {
      countDownInterval: null,

      currentTime: null,

      currentDays: null,
      currentHours: null,
      currentMinutes: null,
      currentSeconds: null
    }
  },
  created () {
    this.currentTime = TIME
    this.updateTime()

    this.countDownInterval = setInterval(() => this.countDown(), 1000)
  },

  methods: {
    countDown () {
      this.currentTime--

      this.updateTime()
      if (!this.currentTime && this.countDownInterval) clearInterval(this.countDownInterval)
    },
    updateTime () {
      this.currentDays = this.pad2(Math.floor(this.currentTime / DAY))
      this.currentHours = this.pad2(Math.floor((this.currentTime % DAY) / HOUR))
      this.currentMinutes = this.pad2(Math.floor(((this.currentTime % DAY) % HOUR) / MINUTE))
      this.currentSeconds = this.pad2(Math.floor((((this.currentTime % DAY) % HOUR) % MINUTE) / SECOND))
    },
    pad2 (number) {
      return (number < 10 ? '0' : '') + number
    }
  }
}
</script>

<style lang="sass" scoped>
.container
  width: 100%
  height: 100%
  display: flex
  justify-content: center
  align-items: center
  flex-wrap: wrap

@media (min-width: 850px)
  .container
    flex-direction: row

@media (max-width: 849px)
  .container
    flex-direction: column
</style>
