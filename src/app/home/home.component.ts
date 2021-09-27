import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number ;
  btnText: string= "Add an Item";
  goalText: string = "My frist life goal";
  goals: Array<string> = [];;

  constructor() { 
    this.itemCount = this.goals.length;
  }

  ngOnInit(): void {
    this.itemCount = this.goals.length;
  }

  addItem(){
    this.goals.push(this.goalText);
    this.goalText ='';
    this.itemCount = this.goals.length;
  }

  

}