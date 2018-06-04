new Vue({
    el: '#vue-app',
    data: {
        age: 20,
        a: 0,
        b: 0
    },
    methods: {
        /*addToA: function () {
            console.log('addToA');
            return this.age + this.a;
        },
        addToB: function () {
            console.log('addToB');
            return this.age + this.b;
        }*/
    },
    computed: {
        /* Computed properties are cached based on their dependencies, it's only fired when at least one of this internal dependencies change */
        addToA: function () {
            console.log(this.age++);
            return this.age + this.a;
        },
        addToB: function () {
            console.log('addToB');
            return this.age + this.b;
        }
    }
});