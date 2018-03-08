import {Injectable} from '@angular/core';
import {PreloadingStrategy, Route} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {MarkovModelService} from './markov-model.service';
import {filter, mergeMap} from 'rxjs/operators';

@Injectable()
export class MarkovPreloadingStrategy implements PreloadingStrategy {

  constructor(private markovModelService: MarkovModelService) {}

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return this.markovModelService.nextState$.pipe(
      filter(moduleName => moduleName === route.path),
      mergeMap(load)
    );
  }
}
