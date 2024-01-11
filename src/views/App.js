import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import ListTodo from './Todos/ListTodo';
  // import MyComponents from './Example/MyComponents';
 function App() {
  return (
    <div className="App">
    <div className="App-header">
      <h3>Xin chào TODOS-APP</h3>
      {/* <MyComponents /> */}
      <ListTodo/>
      </div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
            {/* Same as */}
          <ToastContainer />
    </div>
  );
};

export default App;
