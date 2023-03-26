import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  listOfTodos:any[]=[];
  toDoBuffer: string=""
  editInProgress:boolean=false;

  addToList(){
    this.listOfTodos.push({
      name:this.toDoBuffer.charAt(0).toUpperCase()+this.toDoBuffer.slice(1),isActive:false})
    this.toDoBuffer=""
  }

  toggleActiveClass(index:number){
    this.listOfTodos.forEach(element => {
      element.isActive=false;
    });
    this.listOfTodos[index].isActive = !this.listOfTodos[index].isActive
 }

 editItem(index:number){
  this.toDoBuffer=this.listOfTodos[index].name
  this.removeItem(index)
  this.editInProgress=true
 }

 saveItem(){
  this.addToList()
  this.editInProgress=false
 }

 removeItem(index:number){
  this.listOfTodos.splice(index,1)
 }
}
