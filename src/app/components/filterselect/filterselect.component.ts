import { Component } from '@angular/core';

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
  selectedValue: string | undefined;
}
