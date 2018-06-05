new Vue({
    el: '#vue-app',
    data: {
        title: 'Vue app',
        output: ''
    },
    methods: {
        submitValue: function () {
            console.log(this.$refs);
            this.output = this.$refs.input.value;
        }
    }
});
