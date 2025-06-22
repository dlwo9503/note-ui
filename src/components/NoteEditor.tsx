import React, { useState, useEffect } from 'react';
import { useNoteStore, Note } from '../store/useNoteStore';

interface Props {
  noteId?: string;
  onSaved?: () => void;
}

export const NoteEditor: React.FC<Props> = ({ noteId, onSaved }) => {
  const createNote = useNoteStore(state => state.createNote);
  const updateNote = useNoteStore(state => state.updateNote);
  const getNote = useNoteStore(state => state.getNote);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (noteId) {
      const note = getNote(noteId);
      if (note) {
        setTitle(note.title);
        setContent(note.content);
      }
    } else {
      setTitle('');
      setContent('');
    }
  }, [noteId]);

  const handleSave = () => {
    if (!title && !content) return;
    if (noteId) {
      updateNote(noteId, { title, content });
    } else {
      createNote({ title, content });
    }
    setTitle('');
    setContent('');
    onSaved?.();
  };

  return (
    <div style={{ margin: '8px 0' }}>
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={e => setTitle(e.target.value)}
        style={{ width: '100%', padding: '4px' }}
      />
      <textarea
        placeholder="내용"
        value={content}
        onChange={e => setContent(e.target.value)}
        rows={5}
        style={{ width: '100%', padding: '4px', marginTop: '4px' }}
      />
      <button onClick={handleSave} style={{ marginTop: '4px' }}>
        {noteId ? '수정 완료' : '노트 추가'}
      </button>
    </div>
  );
};