import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'output';

  // onomatopiaList 
  onomatopiaList: string[] = [];

  // onReceiveOnomatopia 
  onReceiveOnomatopia(onomatopia: string): void {
    this.onomatopiaList.push(onomatopia);
  }

}
