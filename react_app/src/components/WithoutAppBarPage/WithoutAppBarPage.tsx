import * as React from 'react';

/**
 * 画面の上部のBarには内ルーティング先
 * Barとルーティングはかぶる部分もあるが別概念なので
 * それを意識するために作成したcomponent
 */
export const WithoutAppBarPage = () => {
  return <h1>このページはapp Barに含まれません</h1>;
}
