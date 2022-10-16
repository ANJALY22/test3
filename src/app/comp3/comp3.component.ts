import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MyService } from '../service/info-service';


@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  title="GadgEon";
  service()
  {
   const ser = new MyService();
   ser.onclickbtn(this.title)


  }
 
  
  
  
}
