var app = new Vue({
    el: '#app',
    data: {
        myList: "My lists",
        newToDoText: '',

        showPopup: false,
        todos: [{
                id: 1,
                name: "Task 1",
                isCompleted: false
            },
            {
                id: 2,
                name: "Task 1",
                isCompleted: false

            },
            {
                id: 3,
                name: "Task 1",
                isCompleted: false
            },
        ]
    },
    methods: {
        show_popup: function() {
            this.showPopup = true
        },
        add_todo: function() {
            this.todos.push({
                id: this.todos.length + 1,
                name: this.newToDoText,
                isCompleted: false
            });
            this.showPopup = false;
            this.newToDoText = '';
        }
    }
})