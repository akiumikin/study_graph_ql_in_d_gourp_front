import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const query = gql`
  {
    user(id: 1) {
      name
      createdAt
      tags{
        id
        name
      }
    }
  }
`;

export const User = () => (
  <Query query={query}>
    {({ loading, data }: any) => {
      if (loading) return <p>Loading...</p>;

      const user = data.user;
      const tags = data.user.tags;

      return (
        <ul>
          <div>
            <p>user_name：{user.name}</p><br/>
          </div>
          {tags.map((tag: any) => (
            <li key={tag.id}>
              <div>
                <p>tag_id：{tag.id}</p>
                <p>tag_name：{tag.name}</p><br/>
              </div>
            </li>
          ))}
        </ul>
      );
    }}
  </Query>
);
