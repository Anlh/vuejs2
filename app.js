new Vue({
    el: '#vue-app',
    data: {
        available: false,
        nearby: false
    },
    methods: {
        toggleAvailableState: function () {
            this.available = !this.available;
        }
    },
    computed: {
        /* Computed properties are cached based on their dependencies, it's only fired when at least one of this internal dependencies change */
        compClasses: function () {
            return {
                available: this.available,
                nearby: this.nearby
            };
        }
    }
});