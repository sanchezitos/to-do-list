import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDoService } from 'src/app/services/todo.service';

interface TodoItem {
  name: string;
  completed: boolean;
}
interface TodoResponse {
  data: TodoItem[];
}
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  items: TodoItem[] = [];
  filteredItems: TodoItem[] = [];
  itemNames: string[] = [];
  filterValue?: string;

  constructor(private toDoService: ToDoService) {
    this.getToDo();
  }

  onFilterChanged(selectedValue?: string) {
    this.filterValue = selectedValue;
    console.log('Valor seleccionado:', selectedValue);

    this.filteredItems = selectedValue
      ? this.items.filter((item) => item.name === selectedValue)
      : this.items;

    console.log('filteredItems', this.filteredItems);
  }

  private getToDo() {
    this.toDoService.getToDo().subscribe((response: TodoResponse) => {
      console.log('response', response);
      const { data } = response ?? {};
      this.items = data ?? [];
      this.filteredItems = this.items;
      this.itemNames = data.map(item => item.name);
    });
    /*     this.http
          .get<{ data: TodoItem[] }>(
            'https://tpmo81rzfa.execute-api.us-east-1.amazonaws.com/dev/node/todo/actions/gettodos'
          )
          .subscribe((response) => {
            console.log('response', response);
            const { data } = response ?? {};
            this.items = data ?? [];
            this.filteredItems = this.items;
            this.itemNames = data.map(item => item.name);
          }); */
  }
  onItemAdded(newItemName: string) {
    console.log('Nuevo item agregado:', newItemName);
    this.getToDo();
  }
}
