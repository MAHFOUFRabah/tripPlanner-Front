import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article.model';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import {  tap } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
  })
  export class ArticleService {
      _articles  = new BehaviorSubject<Article[]>([]);

      constructor(private http:HttpClient){
          
      }
      get article() {
          return this._articles.asObservable();
      }
fetchArticlesDuVoyage(idVoyage:string, username:string, token:string) {
    console.log(`${environment.UrlVoyageBackEnd}/tousArticle/${idVoyage}/${username}`)
    return this.http.get<Article[]>(
      `${environment.UrlVoyageBackEnd}/tousArticle/${idVoyage}/${username}`,  { headers: { Authorization: token  } }
    ).pipe(tap(articles =>{
        this._articles.next(articles);
    }))
  }
  ajouterUnArticle(nomArticle:string, idVoyage: string,username:string, token:string) {
    const articleCree = new Article(null,null,null,nomArticle);
    return this.http.post<Article>(
        `${environment.UrlVoyageBackEnd}/unArticle/${idVoyage}`, articleCree, { headers: { Authorization: token  } }
      )
    }

  }