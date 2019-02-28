import { Component } from '@angular/core'
import { AppStateService } from './akita/app-state.service'
import { AppStateQuery } from './akita/app-state.query'

@Component({
  selector: 'lazy',
  templateUrl: './lazy.component.html',
})
export class LazyComponent {
  constructor(private appStateService: AppStateService, private appStateQuery: AppStateQuery) {
    console.log(appStateService, appStateQuery)

  }
}
