import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type Answer = {
  rus: string;
  eng: string;
  isCorrect: boolean;
};

type AnswersState = {
  answers: Answer[];
};

type AnswersActions = {
  add: (answer: Answer) => void;
  clear: () => void;
};

export const useAnswersStore = create(
  immer<AnswersState & AnswersActions>((set) => ({
    answers: [],
    add: (answer) =>
      set((state) => {
        state.answers.push(answer);
      }),
    clear: () =>
      set((state) => {
        state.answers = [];
      }),
  }))
);
