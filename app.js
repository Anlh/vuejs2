new Vue({
    el: '#vue-app',
    data: {
        someText: ''
    },
    methods: {
        someTextFn: function (event) {
            this.someText = event.target.value;
        }
    }
});