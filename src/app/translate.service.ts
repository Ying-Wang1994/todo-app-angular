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
      name: 'Chinese'
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

  
  translate(content: string, target: Language): Observable<string> {
    return this.httpClient.post<GoogleTranslationResult>(`https://translation.googleapis.com/language/translate/v2?key=AIzaSyDeg51eFBOo7fZDDMOv8xy0VEMXXZepa5g`, {
      q: content,
      target: target,
      format: "text"
    }).pipe(map(result => result.data.translations[0].translatedText))
  }
 }
