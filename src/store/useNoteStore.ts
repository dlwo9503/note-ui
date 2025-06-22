import { nanoid } from 'nanoid';
import { create } from 'zustand';

export interface Note {
  id: string;
  title: string;
  content: string;
}

interface NoteState {
  notes: Note[];
  createNote: (note: Omit<Note, 'id'>) => void;
  updateNote: (id: string, updated: Partial<Omit<Note, 'id'>>) => void;
  deleteNote: (id: string) => void;
  getNote: (id: string) => Note | undefined;
}

export const useNoteStore = create<NoteState>((set, get) => ({
  notes: [],
  createNote: (note) => {
    const newNote: Note = { id: nanoid(), ...note };
    set({ notes: [...get().notes, newNote] });
  },
  updateNote: (id, updated) => {
    set({
      notes: get().notes.map(n =>
        n.id === id ? { ...n, ...updated } : n
      ),
    });
  },
  deleteNote: (id) => {
    set({ notes: get().notes.filter(n => n.id !== id) });
  },
  getNote: (id) => get().notes.find(n => n.id === id),
}));