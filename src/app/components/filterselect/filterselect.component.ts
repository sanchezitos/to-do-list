import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

/**
 * @title Basic select
 */
@Component({
  selector: 'app-filterselect',
  templateUrl: './filterselect.component.html',
  styleUrls: ['./filterselect.component.css']
})
export class FilterselectComponent {
  @Output() selectionChanged = new EventEmitter<string>();
  selectedValue: any;
  items: any[] = [];

  /*  selectedValue: string; */

  onSelectionChange(selectedValue: string) {
    this.selectionChanged.emit(selectedValue);
  }
  /*  onSelectionChange(selectedValue: any) {
     console.log('Valor seleccionado:', selectedValue);
   } */
  constructor(private http: HttpClient) {
    this.testGet()
  }

  testGet() {
    this.http.get('https://tpmo81rzfa.execute-api.us-east-1.amazonaws.com/dev/node/todo/actions/gettodos').subscribe((response: any) => {
      console.log('response', response)
      this.items = response.data
    })
  }
}
