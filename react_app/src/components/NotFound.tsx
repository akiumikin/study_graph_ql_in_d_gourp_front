import * as React from "react";
import { Link } from 'react-router-dom'

export class NotFound extends React.Component {
  render() {
    return (
      <>
        <h1>ページが見つかりません</h1>
        <div><Link to='/'>Topに戻る</Link></div>
      </>
    );
  }
}
