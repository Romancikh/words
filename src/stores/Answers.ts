import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { Answer } from "../types/Answer";

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
