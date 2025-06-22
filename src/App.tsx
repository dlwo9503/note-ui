import React, { useState } from 'react';
import './App.css';
import { NoteList } from './components/NoteList';
import { NoteEditor } from './components/NoteEditor';

function App() {
  const [selectedId, setSelectedId] = useState<string>();

  const handleSaved = () => {
    setSelectedId(undefined);
  };

  return (
    <div className="App">
      <h1>📝 기본 노트 CRUD</h1>
      <NoteEditor noteId={selectedId} onSaved={handleSaved} />
      <NoteList onSelect={setSelectedId} />
    </div>
  );
}

export default App