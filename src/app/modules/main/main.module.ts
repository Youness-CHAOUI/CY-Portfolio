import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './main.component';
import {ShortDescComponent} from './components/short-desc/short-desc.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    MainComponent,
    ShortDescComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule,
  ]
})
export class MainModule {
}
