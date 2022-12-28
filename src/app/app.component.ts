import { Component } from '@angular/core';
import { PharmapsService } from './pharmaps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mapspharma';
  postion : any = null ;
 lat = 31.629473;
 lng = -7.981084;
  constructor(private pharmapsservice : PharmapsService ) {this.getPosition() }
  getPosition(){
    this.pharmapsservice.getposition().subscribe(
      (res) =>{
        console.log(res);
        this.postion=res;
      },(err) =>{
        console.log(err)
      }
    )
  }

}
