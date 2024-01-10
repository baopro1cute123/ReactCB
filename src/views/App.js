import './App.scss';
import ChildComponent from './Example/ChildComponent';
import MyComponents from './Example/MyComponents';
 function App() {
  return (
    <div className="App">
    <div className="App-header">
      <h3>Xin chào</h3>
      <MyComponents />
      
      <ChildComponent name={'child1 two'}/>

      </div>
    </div>
  );
};

export default App;
