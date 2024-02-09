
export interface ITodo {
    id: number;
    text: string;
    completed: boolean;
  }
  
  export type TypeTodos = ITodo[];


  const todos: TypeTodos = [
    { id: 1, text: 'Andres', completed: false },
    { id: 1, text: 'Andres', completed: false }
  ];



  console.log(todos)

