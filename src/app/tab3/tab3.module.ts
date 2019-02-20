import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { Segment1Module } from '../segment1/segment1.module';
import { Segment2Module } from '../segment2/segment2.module';
import { Segment3Module } from '../segment3/segment3.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    Segment1Module,
    Segment2Module,
    Segment3Module
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
