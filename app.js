new Vue({
  el: '#vue-app',
  data: {
    name: 'Helder',
    job: 'Ninja!'
  },
  methods: {
    greet: function (str) {
      return 'Good ' + str + ' ' + this.name;
    }
  }
});