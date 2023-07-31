import { create } from "zustand";
import { v4 as uuid } from "uuid";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";

type newWord = {
  rus: string;
  eng: string;
};

type Word = newWord & { id: string };

type WordsState = {
  words: Word[];
};

type WordsActions = {
  add: (word: newWord) => void;
  edit: (id: string, newWord: newWord) => void;
  remove: (id: string) => void;
};

export const useWordsStore = create(
  persist(
    immer<WordsState & WordsActions>((set) => ({
      words: [],
      add: (word) =>
        set((state) => {
          state.words.push({ id: uuid(), ...word });
        }),
      edit: (id, newWord) =>
        set((state) => ({
          words: state.words.map((word) => {
            if (word.id === id) {
              return { ...word, ...newWord };
            }
            return word;
          }),
        })),
      remove: (id) =>
        set((state) => ({
          words: state.words.filter((word) => word.id !== id),
        })),
    })),
    {
      name: "wordsStore",
    }
  )
);
