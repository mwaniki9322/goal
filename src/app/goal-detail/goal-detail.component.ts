import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {
@Input()goal:Goal=new Goal(0,'','',new Date );
@Output() isDelete=new EventEmitter<boolean>();

goalDelete(complete:boolean){
this.isDelete.emit(complete);
}
  constructor() { }

  ngOnInit(): void {
  }

}
