import './App.css';

function App() {
  const name = '리액트';
const style1 = {
// background-color 는 backgroundColor와 같이 -가 사라지고 카멜 표기밥으로 작성
backgroundColor : 'black',
color : 'aqua',
fontSize : '48px', // font-size --> fontSize
fontWeight : 'bold',
padding : 16 // 단위를 생략하면 px로 지정된다.
};
return <div style={style1}>{name}</div>
}
export default App;
