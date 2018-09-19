new Vue({
  el: '#app',
  data: {
    title: 'Hello world',
    styleCSS: '',
    value: '',
    doubleValue: '',
    show: true,
    cars: [
      {model: "BMW", speed: 250.8},
      {model: "Audi", speed: 240.21},
      {model: "Mercedes-Benz", speed: 350.4},
      {model: "Ford", speed: 160.5}
    ]
  },
  methods: {
    changeText () {
      this.title = 'Text changed by hovering cursor'
    },
    increment (value) {
      this.value = value
      this.doubleValue = this.value*2
      if (value == 25) {
        alert(`You entered ${value}`)
      }
    }
  },
  computed: {
    tripleValue () {
      return this.value * 3
    }
  }
})