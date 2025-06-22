import React from 'react';
import { useNoteStore } from '../store/useNoteStore';

interface Props {
  onSelect: (id: string) => void;
}

export const NoteList: React.FC<Props> = ({ onSelect }) => {
  const notes = useNoteStore(state => state.notes);
  const deleteNote = useNoteStore(state => state.deleteNote);

  return (
    <div>
      {notes.map(note => (
        <div key={note.id} style={{ border: '1px solid #ccc', padding: '8px', margin: '4px 0' }}>
          <h3 onClick={() => onSelect(note.id)} style={{ cursor: 'pointer' }}>
            {note.title || '<제목 없음>'}
          </h3>
          <button onClick={() => deleteNote(note.id)}>삭제</button>
        </div>
      ))}
    </div>
  );
};