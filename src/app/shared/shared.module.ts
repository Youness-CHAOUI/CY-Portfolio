import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconLinkComponent} from './components/icon-link/icon-link.component';
import {HeaderComponent} from "./components/header/header.component";

@NgModule({
  declarations: [
    HeaderComponent,
    IconLinkComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IconLinkComponent,
    HeaderComponent
  ]
})
export class SharedModule {
}
