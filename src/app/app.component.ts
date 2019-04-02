import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toDoApp';
  toDoArray=[]

  addItem(item : string){
    this.toDoArray.push(item);
  }

  deleteItem(item){

    var index=this.toDoArray.indexOf(item)
    if(index>-1){

      this.toDoArray.splice(index,1);
    }

  }
  toDoSubmit(item : any){

    this.toDoArray.push(item.todo);
  }
}
