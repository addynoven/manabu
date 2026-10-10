export interface KanjiItem {
  id: string;
  kanjiChar: string;
  meanings: string[];
  onyomi: string[];
  kunyomi: string[];
  jlptLevel: number;
  strokeCount: number;
}

export interface VocabItem {
  id: string;
  word: string;
  reading: string;
  meanings: string[];
  jlptLevel: number;
}
