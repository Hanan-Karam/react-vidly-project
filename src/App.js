
import './App.css';
import Movies from './components/movies';

function App() {
  return (
    <main className={"container"}>
        <h1 className={"mt-5 text-primary text-center d-inline-block fw-bold border-bottom p-3"}> My First React Projects</h1>

      <Movies/>
    </main>
  );
}

export default App;
