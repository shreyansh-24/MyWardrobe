import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  //array for shirts
  shirts = [
    {type:"Red Shirt"},
    {type:"Black Shirt"}
  ];

  pants = [
    {type:"Red Pant"},
    {type:"Black Pant"}
  ];
  s1:any={};  
  s2:any={};

  addShirt(){
    this.shirts.push(this.s1);
    this.s1={};
    alert("Shirt Added to your Wardrobe Successfully");
  }
  addPant(){
    this.pants.push(this.s2);
    this.s2={};
    alert("Pant Added to your Wardrobe Successfully");

  }

}
