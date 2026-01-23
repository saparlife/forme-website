import type { Locale } from './config';

import ru from './dictionaries/ru.json';
import kk from './dictionaries/kk.json';
import en from './dictionaries/en.json';

const dictionaries = {
  ru,
  kk,
  en,
};

export const getDictionary = (locale: Locale) => {
  return dictionaries[locale];
};

export type Dictionary = typeof ru;
