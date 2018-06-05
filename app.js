// If we want to share the same data reference through all the greeting components we need to declare and assign variable like this
// and pass to the return of the data function
// If we used this approach instead what javascript will do under the hood was create a single reference in memory to use in all the greeting components created
// Will could cause some side effects, like if we would update anything from data, that data mutation would be propagated to all the instances of greeting
/*var data = {
    name: 'helder'
};*/

Vue.component('greeting', {
    template: '<p v-on:click="changeTheName">Hey there, I am {{name}}</p>',
    data: function () {
        return { // This will store a new copy of this returned object for each closure created
            name: 'Helder'
        }
    },
    methods: {
        changeTheName: function () {
            this.name = 'Tiago'
        }
    }
});

var one = new Vue({
    el: '#vue-app-one',
    data: {
        title: 'Vue app one'
    },
    methods: {},
    computed: {
        /* Computed properties are cached based on their dependencies, it's only fired when at least one of this internal dependencies change */

    }
});

var two = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'Vue app two'
    },
    methods: {},
    computed: {
        /* Computed properties are cached based on their dependencies, it's only fired when at least one of this internal dependencies change */

    }
});