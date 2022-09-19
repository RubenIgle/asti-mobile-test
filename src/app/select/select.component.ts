import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})


export class SelectComponent implements OnInit {

  options=['Custom Dropdown Test','Second Dropdown option', 'Third Dropdown option', 'Another One', 'But not less important', 'The latest option in the dropdown'];
  currentValue=''
  clickedSelect=false

  constructor() { }

  ngOnInit(): void {
    this.currentValue = this.options[0];
  }

  selectOption(a:any){
    this.currentValue = a
    this.clickSelect()
  }

  clickSelect(){
    this.clickedSelect=!this.clickedSelect
  }

}

//Author: Rubén Iglesias