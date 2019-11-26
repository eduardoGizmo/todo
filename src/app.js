import Vue from 'vue';


document.addEventListener('DOMContentLoaded', () => {

  new Vue ({

    el: "#app",
    data: {
      todos: [
         {task: "Clean Computer keyboard", isDone: false },
         {task: "Fold clean clothes", isDone: false},
         {task: "Clean dishes", isDone: true}
      ],
      newTodo: "",
    },
    methods:{

      addTodo: function (todo) {
        this.todos.push({task: this.newTodo, isDone: false});
        this.newTodo = ""
      },
      doTask: function (index) {
        this.todos[index].isDone = true ;
      }

    // END OF METHODS
    }
    // END NEW VUE
  });
// END DOCUMENT LISTENER
})


    
