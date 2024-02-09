
import { InMemoryCache, ReactiveVar, makeVar } from "@apollo/client";

// Clients
import { TypeTodos } from "../modules/clients/data/global-states/tasks/model-todo-list";
import { VisibilityFilter, VisibilityFilters } from "../modules/clients/data/global-states/tasks/model-visibility-filter";

// Cylinder
import { TypeCylinderConfig, InitCylinderConfig, } from '../modules/cylinders/data/global-states/cylinders-config/model-cylinders-config'

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



/* VARIABLES LOCALES */


// CLIENTS
export const nombreVar = makeVar('')

export const apellidoVar = makeVar('')

export const edadVar = makeVar(0)

export const estadoCivilVar = makeVar('')

export const gsClientsEstadoCivil = makeVar('')

// const cartItemsVar = makeVar([]);
// const cartItemIds = [100, 101, 102];
// cartItemsVar(cartItemIds);
// console.log(cartItemsVar());


/* CYLINDERS */
// Cylinder Config
export const cacheCylindersConfig: ReactiveVar<TypeCylinderConfig> = makeVar<TypeCylinderConfig>(
  InitCylinderConfig
)


// TODO LIST
const todosInitialValue: TypeTodos = [
  {
    id: 0,
    completed: false,
    text: "Use Apollo Client 3"
  }
]

export const todosVar: ReactiveVar<TypeTodos> = makeVar<TypeTodos>(
  todosInitialValue
)


export const visibilityFilterVar = makeVar<VisibilityFilter>(
  VisibilityFilters.SHOW_ALL
)