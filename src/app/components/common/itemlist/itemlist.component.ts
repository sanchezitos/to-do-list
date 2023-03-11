import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent {
  @Input() name: string = '';
  onDeleteClick() {
    // Agregue aquí el código para manejar el evento onDeleteClick
  }
  checked: true | undefined;
 
}
