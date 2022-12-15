import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BulletingBoardRoutingModule } from './bulleting-board-routing.module';
import { MainComponent } from './main/main.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    MainComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    BulletingBoardRoutingModule
  ]
})
export class BulletingBoardModule { }
