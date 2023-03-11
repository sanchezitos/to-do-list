import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ToDoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent {
  checked: true | undefined;
  @Input() name: string = '';
  @Output() itemDeleted = new EventEmitter<string>();

  constructor(private toDoService: ToDoService, private notification: NzNotificationService) { }

  onDeleteClick(name: string) {
    console.log('ITEM SELECCIONADO', name)
    this.toDoService.deleteToDo(name).subscribe((response) => {
      console.log('REPSONSE ITEM DELETE', response)
      this.itemDeleted.emit(name)
      this.notification.create('error', 'To-Do eliminado!', `Se ha eliminado el item: ${name} de la lista`);
    })
    /* alert("Botón eliminar clickeado") */
    // Agregue aquí el código para manejar el evento onDeleteClick
  }


}
