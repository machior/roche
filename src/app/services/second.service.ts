import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecondService {

  constructor() { }

  getData(): Observable<Object> {
    return of({
      leftSide: {
        text: 'Lewe Menu Boczne - Informacje Kontaktowe Linki do innych artykułów',
        active: true,
        mods: 'border'
      },
      rightSide: {
        text: 'Prawe Menu Boczne',
        active: true,
      },
      main: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper, leo eget',
        title: 'This is a title'
      }
    });
  }
}
