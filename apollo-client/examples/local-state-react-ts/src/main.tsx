
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Apollo
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

// Cache
import { cache } from './cache/cache.ts'

const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  // cache: new InMemoryCache(),
  cache,
  connectToDevTools: true,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
)
