
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Apollo Client
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
)
