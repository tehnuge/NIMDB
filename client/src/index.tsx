import ApolloClient from 'apollo-boost'
import React from 'react'
import ReactDOM from 'react-dom'

import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import './index.css'

const client = new ApolloClient({
  uri: '/graphql',
})

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <App />
      </ApolloHooksProvider>
    </ApolloProvider>
  </Router>,
  document.getElementById('root')
)
