import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-title-editor',
  templateUrl: './title-editor.component.html',
  styleUrls: ['./title-editor.component.css']
})
export class TitleEditorComponent implements OnInit {

@Input()
webTitle:string;

@Output()
titleChanged:EventEmitter<string>; 
  notify: any;
  
  constructor() { 
    this.titleChanged = new EventEmitter<string>();
  }

  ngOnInit() {
  }
  notifyTitleChanged(){
   this.titleChanged.emit(this.webTitle);
}
}
