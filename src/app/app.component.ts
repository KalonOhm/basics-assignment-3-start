import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  logArray = []
  displayParagraph = true;

  onClickDisplayParagraph() {
    //this.displayParagraph = !this.displayParagraph;
    this.displayParagraph === true ? this.displayParagraph = false : this.displayParagraph = true;
    console.log(this.displayParagraph);
    this.logArray.push(this.logArray.length +1)
    //this.logArray.push(new Date());
    console.log(this.logArray);
  }
}
