<template lang="pug">
  section.timer-card
    div.timer-card-countdown-number {{ countdownTimer }}
    div.timer-card-countdown-label {{ label }}
</template>

<script>
export default {
  name: 'Card',
  props: ['number', 'label'],
  data () {
    return {
      countdownTimer: this.label === 'Days' ? '03' : '00'
    }
  },
  watch: {
    number: function (newValue) {
      this.$el.classList.add('rotate')
    }
  },
  mounted () {
    this.$el.addEventListener('animationend', () => {
      if (this.$el.classList.contains('rotate')) {
        this.$el.classList.remove('rotate')
        this.$el.classList.add('rotate-back')
        this.countdownTimer = this.number
      } else if (this.$el.classList.contains('rotate-back')) {
        this.$el.classList.remove('rotate-back')
      }
    })
  }
}
</script>

<style lang="sass" scoped>
.timer-card
  background-color: #575757
  border: .05em solid #7b7b7b
  padding: .3rem
  width: 5rem
  height: auto
  margin: .5rem
  .timer-card-countdown-number
    background-color: #65b194
    color: #fff
    text-align: center
    font-size: 3rem
    font-weight: 700
    padding: 1rem .1rem

  .timer-card-countdown-label
    color: #fff
    text-align: center
    margin-top: .3rem
    font-size: .7rem

.rotate
  animation: rotate .45s ease 1

.rotate-back
  animation: rotateBack .45s ease 1

@keyframes rotate
  from
    transform: rotateY(0deg)
  to
    transform: rotateY(-90deg)

@keyframes rotateBack
  from
    transform: rotateY(-90deg)
  to
    transform: rotateY(0deg)

</style>
