import { NgModule } from '@angular/core';
import { BrowserModule, platformBrowser } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TransformDirective } from './transform.directive';
import { SafePipe } from './pipes/safe/safe.pipe';

import { CoreModule } from './core/core.module';
import { ChatComponent } from './components/chat/chat.component';
import { UsersComponent } from './components/users/users.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StringInterpolationComponent } from './components/bindings/string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './components/bindings/property-binding/property-binding.component';
import { EventBindingComponent } from './components/bindings/event-binding/event-binding.component';
import { HelloComponent } from './components/hello/hello.component';
import { CounterActionsComponent } from './components/counter-actions/counter-actions.component';
import { FormsModule } from '@angular/forms';
import { AttributeBindingComponent } from './components/bindings/attribute-binding/attribute-binding.component';
import { ClassBindingsComponent } from './components/bindings/class-bindings/class-bindings.component';
import { StyleBindingsComponent } from './components/bindings/style-bindings/style-bindings.component';




@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TransformDirective,
    SafePipe,
    ChatComponent,
    UsersComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    HelloComponent,
    CounterActionsComponent,
    AttributeBindingComponent,
    ClassBindingsComponent,
    StyleBindingsComponent,
  

  ],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    FormsModule
   
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
