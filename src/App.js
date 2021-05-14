import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Lee';
  const naver = {
    name: '네이버',
    url: 'http://naver.com'
  }
  return (
    <div className="App">
      <h1
        style={{
          color: '#f0f',
          backgroundColor: 'green',
        }}
      >
        Hello, {name}, <p> {2 + 3}</p>
      </h1>
      <a href={naver.url}>{naver.name}</a>
    </div>
  );
}

export default App;
