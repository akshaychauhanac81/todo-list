import { Component, OnInit } from '@angular/core';
import { Learn } from '../../Learn';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {
  localItem:any;

    learn:Learn[];
  constructor() {
    this.localItem =  localStorage.getItem('learn');
    if(this.localItem == null){

      this.learn = [ ]
    }else{
      this.learn = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {
  }

   deleteLearn(learn1: Learn){
     console.log(learn1);
     const index = this.learn.indexOf(learn1);
     this.learn.splice(index, 1);
     localStorage.setItem("learn", JSON.stringify(this.learn));
    }
    AddLearn(learn1: Learn){
      console.log(learn1);
      this.learn.push(learn1);
      localStorage.setItem("learn", JSON.stringify(this.learn));

    }
    CheckBoxLearn(learn1:Learn){
      const index = this.learn.indexOf(learn1);
     this.learn[index].active = !this.learn[index].active;
      localStorage.setItem("learn", JSON.stringify(this.learn));

    }
}
