import './App.css';
import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Table } from './components/table';
import { NavBar } from './components/NavBar';
import { Input } from './components/Input'
import { FallBackUI, logError } from './components/errorHandler';



function App() {
  const [studentId, setStudentId] = useState();

  return (
    <div>
      <ErrorBoundary onError={logError} FallbackComponent={FallBackUI} >
        < NavBar />
        < Input setStudentId={setStudentId} />
        {
          studentId ? < Table studentId={studentId} /> : <div/>
        }
      </ErrorBoundary>
    </div>
  );
}

export default App;
