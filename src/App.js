import './App.css';
import { useState } from 'react';
import { Table } from './components/table';
import { NavBar } from './components/NavBar';
import { Input } from './components/Input'



function App() {
  const [studentId, setStudentId] = useState();

  return (
    <div>
      < NavBar />
      < Input setStudentId={setStudentId} />
      {
        studentId ? < Table studentId={studentId} /> : <div/>
      }
    </div>
  );
}

export default App;
