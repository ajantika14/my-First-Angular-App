import { NgModule } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSliderModule} from '@angular/material/slider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatSliderModule,
    MatProgressSpinnerModule
  ],
  exports:[
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatSliderModule,
    MatProgressSpinnerModule
  ]
})
export class AppMaterialModule { }
