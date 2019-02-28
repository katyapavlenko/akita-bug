import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LazyComponent as PlaybookV4, LazyComponent } from './lazy.component'
import { RouterModule, Routes } from '@angular/router'
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store'
import { AppStateQuery } from './akita/app-state.query'
import { AppStateService } from './akita/app-state.service'
import { AppStateStore } from './akita/app-state.store'

const routes: Routes = [
  {
    path: '',
    component: PlaybookV4,
  },
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), AkitaNgRouterStoreModule],
  declarations: [LazyComponent],
  providers: [AppStateQuery, AppStateService, AppStateStore],
})
export class LazyModule {}
