import { Injectable } from '@angular/core'
import { AppStateStore } from './app-state.store'
import { AppStateQuery } from './app-state.query'

@Injectable()
export class AppStateService {
  constructor(
    private store: AppStateStore,
    private query: AppStateQuery,
  ) {}

}
