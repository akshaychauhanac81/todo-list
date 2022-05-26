import { Component, EventEmitter ,OnInit, Output } from '@angular/core';
import { Learn } from 'src/app/Learn';

@Component({
  selector: 'app-add-learn',
  templateUrl: './add-learn.component.html',
  styleUrls: ['./add-learn.component.css']
})
export class AddLearnComponent implements OnInit {

  'title':string;
  'desc':string;
  // 'active':boolean;
  @Output() learnAdd:EventEmitter<Learn> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const learn1 ={
      sno:8,
      title:this.title,
      desc:this.desc,
      active:true
    }

    this.learnAdd.emit(learn1);
  }


}
