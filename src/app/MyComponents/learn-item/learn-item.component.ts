
import { Component, EventEmitter, Output,Input, OnInit } from '@angular/core';
import { Learn } from 'src/app/Learn';

@Component({
  selector: 'app-learn-item',
  templateUrl: './learn-item.component.html',
  styleUrls: ['./learn-item.component.css']
})
export class LearnItemComponent implements OnInit {
   @Input() 'learn1':Learn;
   @Output() learnDelete:EventEmitter<Learn> = new EventEmitter();
   @Output() learnCheckBox:EventEmitter<Learn> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(learn1:Learn){
    this.learnDelete.emit(learn1);
    // console.log("learning content is deleted!");
  }
  onCheckClick(learn1:Learn){
    console.log(learn1);
    this.learnCheckBox.emit(learn1);
    console.log(learn1);
  }

}
function output() {
  throw new Error('Function not implemented.');
}

