import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello-world.component';
import { EventBindingDemoComponent } from './event-binding-demo/event-binding-demo.component';
import { FormsModule } from '@angular/forms';
import { BindingsDemoComponent } from './bindings-demo/bindings-demo.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { AttributeBindingDemoComponent } from './attribute-binding-demo/attribute-binding-demo.component';
import { ForIfComponent } from './for-if/for-if.component';
import { SwitchComponent } from './switch/switch.component';
import { ElseComponent } from './Else.component';
import { FirstLastOddEvenComponent } from './first-last-odd-even/first-last-odd-even.component';
import { TrackByDemosComponent } from './track-by-demos/track-by-demos.component';
import { UpdateColorDirective } from './update-color.directive';
import { ShowHidePasswordDirective } from './show-hide-password.directive';



@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    EventBindingDemoComponent,
    BindingsDemoComponent,
    ParentComponent,
    ChildComponent,
    AttributeBindingDemoComponent,
    ForIfComponent,
    SwitchComponent,
    ElseComponent,
    FirstLastOddEvenComponent,
    TrackByDemosComponent,
    UpdateColorDirective,
    ShowHidePasswordDirective,
    // SampleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
