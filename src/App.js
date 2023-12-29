
import './App.css';
import AllNotes from './REDUX/Components/AllNotes';
import NotesForm from './REDUX/Components/NotesForm';

function App() {
  return (
    <div className="App">
      <NotesForm/>
      <AllNotes/>
    </div>
  );
}

export default App;
