import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="todo__app">
      <header className="app__header w-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h1 className="text-center text-white mb-4">Plans For Today</h1>
              <div className="card p-4 bg-dark text-white shadow">
                <div className="card-body">
                  <TodoList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
