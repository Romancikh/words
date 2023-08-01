import { create } from "zustand";
import { v4 as uuid } from "uuid";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import { Word, newWord } from "../types/Word";

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
      // words: [{"id":"4e43e038-9e64-49f7-a8c0-1f9adf559be4","rus":"машина","eng":"car"},{"id":"5c960e47-c7ac-428e-9e60-3d8f7fc65f89","rus":"библиотека","eng":"library"},{"id":"1fc8217a-96bc-4bea-894d-be8ca8ee29e1","rus":"птица","eng":"bird"},{"id":"b4e9f042-9215-49d5-b775-08ca202fcfd1","rus":"ягода","eng":"berry"},{"id":"5848cdd0-a809-44fb-8290-05369e756d0e","rus":"колокол","eng":"bell"},{"id":"eb3fc0b6-cd16-4eae-ba82-d4cf875a50d6","rus":"пчела","eng":"bee"},{"id":"d3a39314-4583-41a9-bc34-9270b5423593","rus":"корзина","eng":"basket"},{"id":"8bb92b80-32d5-4a4a-a3a3-2a1ceb3ce834","rus":"рука","eng":"arm"},{"id":"7b1152b6-c040-41aa-af41-dc65a6a12901","rus":"яблоко","eng":"apple"},{"id":"11a614dc-6d4c-46d5-b646-05291f04acf5","rus":"мягкий","eng":"soft"},{"id":"07a79fa2-53cf-46bf-8a14-3314ca5996d4","rus":"короткий","eng":"short"},{"id":"71268779-dbc3-4002-b377-357361af2b30","rus":"синий","eng":"blue"},{"id":"1990f0f4-f5b1-4b68-9e8a-fd9ada991a15","rus":"вчера","eng":"yesterday"},{"id":"15b0412f-bd03-49a5-82fd-b150ec448daf","rus":"брать","eng":"take"},{"id":"19249dad-3127-4f3c-ac34-c2fbc78358b1","rus":"билет","eng":"ticket"}],
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
