import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CorePipePipe } from './core-pipe.pipe';
import { CoreDiDirective } from './core-di.directive';



@NgModule({
  declarations: [
    HeaderComponent,
    CorePipePipe,
    CoreDiDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, CorePipePipe, CoreDiDirective]
})
export class CoreModule { }
