import { Store, StoreConfig } from '@datorama/akita'
import { Injectable } from '@angular/core'

export interface IAppState {
  isDirty: boolean
  isReadonly: boolean
}

export function createInitialState(): IAppState {
  return {
    isDirty: false,
    isReadonly: false,
  }
}

@Injectable()
@StoreConfig({ name: 'filter', resettable: true })
export class AppStateStore extends Store<IAppState> {
  constructor() {
    super(createInitialState())
  }
}
