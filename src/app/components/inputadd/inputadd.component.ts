import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToDoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-inputadd',
  templateUrl: './inputadd.component.html',
  styleUrls: ['./inputadd.component.css']
})
export class InputaddComponent {
  form: FormGroup;

  @Output() itemAdded = new EventEmitter<string>();

  constructor(private fb: FormBuilder, private toDoService: ToDoService) {
    this.form = this.fb.group({
      name: [''],
    });
  }

  onSubmit() {
    const newItemName = this.form.controls['name'].value;
    this.toDoService.addToDo(newItemName).subscribe((response) => {
      console.log('RESPONSE ITEM ADDED', response)
      this.itemAdded.emit(newItemName);
      this.form.reset();
    });
  }
}
