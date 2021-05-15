import './App.css';
import Hello from './component/Hello';

function App() {
  return (
    <div className="App">
      <h3>props: properties</h3>
      <Hello age={10} />
      <Hello age={20} />
      <Hello age={30} />
    </div>
  );
}

export default App;

/*
  동일한 컴포넌트라도 state 는 각각 관리되므로
  컴포넌트간의 영향을 받지 않음
*/
