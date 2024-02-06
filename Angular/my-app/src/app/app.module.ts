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
import { CapitalizePipe } from './Capitalize.pipe';
import { SortDemoComponent } from './sort-demo/sort-demo.component';
import { PureSortPipe } from './PureSort.pipe';
import { ImpureSortPipe } from './ImpureSort.pipe';
import { FilterComponent } from './filter/filter.component';
import { MyFilterPipe } from './my-filter.pipe';
import { LifeCycleParentComponent } from './life-cycle-parent/life-cycle-parent.component';
import { LifeCycleChildComponent } from './life-cycle-child/life-cycle-child.component';
import { ViewChildDemosComponent } from './view-child-demos/view-child-demos.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { ContentParentComponent } from './content-parent/content-parent.component';



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
    CapitalizePipe,
    SortDemoComponent,
    PureSortPipe,
    ImpureSortPipe,
    FilterComponent,
    MyFilterPipe,
    LifeCycleParentComponent,
    LifeCycleChildComponent,
    ViewChildDemosComponent,
    ContentChildComponent,
    ContentParentComponent
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
