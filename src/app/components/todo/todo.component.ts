import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface TodoItem {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  items: TodoItem[] = [];
  filteredItems: TodoItem[] = [];
  filterValue?: string;

  constructor(private http: HttpClient) {
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
    this.http
      .get<{ data: TodoItem[] }>(
        'https://tpmo81rzfa.execute-api.us-east-1.amazonaws.com/dev/node/todo/actions/gettodos'
      )
      .subscribe((response) => {
        console.log('response', response);
        const { data } = response ?? {};
        this.items = data ?? [];
        this.filteredItems = this.items;
      });
  }
}
