import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterselectComponent } from './components/filterselect/filterselect.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzInputModule } from 'ng-zorro-antd/input';

import { ToDoService } from './services/todo.service';


import { TodoComponent } from './components/todo/todo.component';
import { ItemlistComponent } from './components/common/itemlist/itemlist.component';
import { InputaddComponent } from './components/inputadd/inputadd.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterselectComponent,
    TodoComponent,
    ItemlistComponent,
    InputaddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NzButtonModule,
    NzSelectModule,
    NzCardModule,
    NzCheckboxModule,
    NzDividerModule,
    NzIconModule,
    NzToolTipModule,
    NzInputModule,

  ],
  providers: [ToDoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
