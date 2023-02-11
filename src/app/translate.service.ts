import {Injectable} from '@angular/core';
import {ILanguage, Language} from "./store/types";
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";




export interface GoogleTranslationResult {
  data: {
    translations: Array<{
      translatedText: string
    }>
  }
}

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  languages: ILanguage[] = [
    {
      code: Language.CN,
      name: '中文简体'
    },
    {
      code: Language.EN,
      name: 'English'
    },
    {
      code: Language.DE,
      name: 'Deutsch'
    },
    {
      code: Language.FR,
      name: 'Français'
    }
  ]
  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * @desc 调用谷歌翻译，需要 content -> 要翻译的内容，和 target -> 目标语言两个参数
   * @param content
   * @param target
   */
  translate(content: string, target: Language): Observable<string> {
    return this.httpClient.post<GoogleTranslationResult>(`https://translation.googleapis.com/language/translate/v2?key=AIzaSyA9PbwV3vJsHydx7olAXxrqAH2aaz7LggE`, {
      q: content,
      target: target,
      format: "text"
    }).pipe(map(result => result.data.translations[0].translatedText))
  }
 }
