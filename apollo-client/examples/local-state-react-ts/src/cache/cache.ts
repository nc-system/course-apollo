
import { InMemoryCache, ReactiveVar, useReactiveVar, makeVar } from "@apollo/client";

// Todo List
import { TypeTodos } from "../modules/todo-list/data/global-states/tasks/model-todo-list";
import { VisibilityFilter, VisibilityFilters } from "../modules/todo-list/data/global-states/tasks/model-visibility-filter";

// CACHE
export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        
        nombre: {
          read () {
            return nombreVar();
          }
        },
        
        todos: {
          read () {
            return todosVar();
          }
        },
        
        visibilityFilter: {
          read () {
            return visibilityFilterVar();
          },
        }
      }
    }
  }
});

/**
 * Set initial values when we create cache variables.
 */



export const nombreVar = makeVar('')

export const edadVar = makeVar(0)

export const estadoCivilVar = makeVar('')

// const cartItemsVar = makeVar([]);
// const cartItemIds = [100, 101, 102];
// cartItemsVar(cartItemIds);
// console.log(cartItemsVar());

// Todos Var
const todosInitialValue: TypeTodos = [
  {
    id: 0,
    completed: false,
    text: "Use Apollo Client 3"
  }
]

export const todosVar: ReactiveVar<TypeTodos> = makeVar<TypeTodos>(
  todosInitialValue
);


export const visibilityFilterVar = makeVar<VisibilityFilter>(
  VisibilityFilters.SHOW_ALL
)