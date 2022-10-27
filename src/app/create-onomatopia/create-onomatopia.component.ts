import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.css']
})
export class CreateOnomatopiaComponent implements OnInit {

  constructor() { }

  newOnomatopia: string = '';
  @Output() sendOnomatopiaToParent = new EventEmitter<string>();

  createOnomatopia(): void {
    this.sendOnomatopiaToParent.emit(this.newOnomatopia);
    this.newOnomatopia = '';
  }

  ngOnInit(): void {
  }

}
