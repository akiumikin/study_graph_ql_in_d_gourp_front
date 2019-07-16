import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const query = gql`
  {
    organization(login: "apollographql") {
      repositories(first: 5, isFork: false) {
        nodes {
          id
          name
          url
          viewerHasStarred
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`;

export const GithubPage = () => (
  <Query query={query}>
    {({ loading, data }: any) => {
      if (loading) return <p>Loading...</p>;

      const repositories = data.organization.repositories.nodes;

      return (
        <ul>
          {repositories.map((repo: any) => (
            <li key={repo.id}>
              <a href={repo.url}>{repo.name}</a>
              <button>{repo.stargazers.totalCount} Star</button>
            </li>
          ))}
        </ul>
      );
    }}
  </Query>
);
