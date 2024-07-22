//import logo from './logo.svg';
import './App.css';
//名前付きでない場合下記の様に
//import Article from "./component/Article";
//名前付きインポート
//import {Article,Counter, Fetch} from "./component";
import FetchData from './FetchData';

function App() {
  return (
    <>
      {/* <Article
      title={'タイトル　React Propsのテスト'}
      content={'コンテンツ　React Propsを確認<br>aaaaaaaaaaaaa'}
      /> */}
      {/* <Counter /> */}
      {/* <Fetch /> */}
      <FetchData />
    </>
  );
}

export default App;
