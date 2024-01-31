
import { InMemoryCache, ReactiveVar, makeVar } from "@apollo/client";

// Todo List
import { TypeTodos } from "../context/todo-list/model-todo-list";
import { VisibilityFilter, VisibilityFilters } from "../context/todo-list/model-visibility-filter";

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
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