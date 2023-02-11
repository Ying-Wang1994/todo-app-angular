export enum Language {
  EN= 'en',
  CN = 'zh-CN',
  FR = 'fr',
  DE = 'de'
}

export interface ILanguage {
  code: Language;
  name: string
}

export interface Todo {
  todoId: string;
  task: string;
  translations: Array<{
    language: Language,
    task: string
  }>;
  done: boolean;
}
