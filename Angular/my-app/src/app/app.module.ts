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


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    EventBindingDemoComponent,
    BindingsDemoComponent,
    ParentComponent,
    ChildComponent,
    AttributeBindingDemoComponent
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
