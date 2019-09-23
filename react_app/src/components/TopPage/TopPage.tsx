import * as React from 'react';
import { User } from '../../types/models/user'
import { RequiredTextField } from '../application/form/textField/require';

/**
 * トップページ
 */
export const TopPage = () => {
  const [user, setUser] = React.useState(new User)

  return (
    <>
      <h1>Hello React!</h1>
      <RequiredTextField
        id='testField'
        label={user.name_extension.displayName}
        modelState={user}
        setModelState={setUser}
        itemName={user.name_extension.itemName}
        placeholder='山田 太郎'
      />
    </>
  );
}
