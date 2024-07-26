import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { RepoData, RepositoryData } from './repos.model';
import { Apollo } from 'apollo-angular';
import { GET_REPOS } from '../../graphql/graphql.queries';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ReposService {
  apollo = inject(Apollo);
  http = inject(HttpClient)

  // below method has problem with token connecting to github graphql api , so alternative method picks from json
  getGraphqlRepos(username: string): any {
    this.apollo.watchQuery<RepoData>({
      query: GET_REPOS,
      variables: { username },
    })
      .valueChanges
      .pipe(
        map(result => result?.data)
      )
      .subscribe(({ data, error }: any) => {
        return of(data)
      })
  }

  getReposData(username: string): Observable<any> {
    return this.http.get('repo.json')
  }

}