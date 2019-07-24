// react
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// apollo
import { ApolloProvider } from 'react-apollo';
import { client } from './apolloClient'
import { Base } from './components/Base'

// favicon 設定はindex.htmlで行なっている
import './favicon.ico';

ReactDOM.render(
  <ApolloProvider client={client}>
    <Base />
  </ApolloProvider>,
  document.getElementById('app')
);
