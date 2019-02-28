import { Query } from '@datorama/akita'
import { Injectable } from '@angular/core'
import { AppStateStore, IAppState } from './app-state.store'
import { RouterQuery } from '@datorama/akita-ng-router-store'

@Injectable()
export class AppStateQuery extends Query<IAppState> {
  constructor(protected store: AppStateStore, private routerQuery: RouterQuery) {
    super(store)
    console.log(this.routerQuery)
  }
}

