import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello-world.component';
import { EventBindingDemoComponent } from './event-binding-demo/event-binding-demo.component';
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
import { CapitalizePipe } from './Capitalize.pipe';
import { ErrorCmp } from './ErrorDemo';
import { GlobalErrorHandler } from './GlobalErrorHandler';
import {ErrorHandler} from '@angular/core';
import { ViewEncapsulationDemoComponent } from './view-encapsulation-demo/view-encapsulation-demo.component';
import { MyCarComponent } from './DI/MyCar';
import { Car, Engine, Fuel, FuelInjector, Piston } from './DI/Car';
import { ParentDIComponent } from './parent-di/parent-di.component';
import { Child1DIComponent } from './child1-di/child1-di.component';
import { Child2DIComponent } from './child2-di/child2-di.component';
import { GenerateRandom } from './GenerateRandom';
import { UseClassDemoComponent } from './use-class-demo/use-class-demo.component';
import { UseFactoryDemoComponent } from './use-factory-demo/use-factory-demo.component';
import { UseValueDemoComponent } from './use-value-demo/use-value-demo.component';
import { InjectionTokenDemoComponent } from './injection-token-demo/injection-token-demo.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { FormsModule} from '@angular/forms';
import { ValueStatusChangesComponent } from './value-status-changes/value-status-changes.component';
import { ConditionalValidationComponent } from './conditional-validation/conditional-validation.component';
import { AsyncValidationComponent } from './async-validation/async-validation.component';
import { HttpClientModule } from '@angular/common/http';



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
    ContentParentComponent,
    ErrorCmp,
    ViewEncapsulationDemoComponent,
    MyCarComponent,
    ParentDIComponent,
    Child1DIComponent,
    Child2DIComponent,
    UseClassDemoComponent,
    UseFactoryDemoComponent,
    UseValueDemoComponent,
    InjectionTokenDemoComponent,
    TemplateFormsComponent,
    ReactiveFormsComponent,
    ValueStatusChangesComponent,
    ConditionalValidationComponent,
    AsyncValidationComponent
    // SampleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 
    
  ],
  providers: [{provide: ErrorHandler, useClass: GlobalErrorHandler}, 
    Fuel, FuelInjector, Engine, Car,Piston, GenerateRandom],
  bootstrap: [AppComponent]
})
export class AppModule { }
