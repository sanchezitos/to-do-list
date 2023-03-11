import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output, Input } from '@angular/core';

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
  @Input() items: any;
  @Input() selectedValue?: string;
  @Output() selectionChanged = new EventEmitter<string>();


  /*  selectedValue: string; */

  onSelectionChange(selectedValue: string) {
    this.selectionChanged.emit(selectedValue);
  }
}
