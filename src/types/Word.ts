export type newWord = {
  rus: string;
  eng: string;
};

export type Word = newWord & { id: string };
