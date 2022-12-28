import { Component } from '@angular/core';
import { PharmapsService } from './pharmaps.service';
declare var google : any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mapspharma';
  postion : any  ;
  pharmaa : any  ;
  lat?: number  ;
  lng ?: number ;
  markerse !: any[];
  liste: Array<{latitude: number, longitude: number}> = []; 
  pha : any = null ;
  map: any;
  ngOnInit(): void {
    this.getPosition();
    console.log("rrrrrrrrr");
    this.getPosition();
  }
  constructor(private pharmapsservice : PharmapsService ) {
   }
  searchText: string='';
 

  getPosByName(id:any) {
    this.pharmapsservice.getZoneById(id)
      .subscribe(
        data2 => {
          this.pharmaa = data2;
          console.log(data2);
          console.log("dkhlt")
          
          
          this.pharmaa.forEach((res: any ) => {
            this.lat = res.x;
            this.lng = res.y; 
            console.log(this.lat);
            console.log(this.lng);
            console.log("jj")

          }
         )

        },
        error => {
          alert("there is no Position")
          console.log("erreur")
          console.log(error);
        });
  }
get(){
  this.pharmapsservice.getZoneById(1)
  .subscribe((data:any) => {
        console.log(data)
        this.pharmaa = data
        this.pharmaa.forEach((monument:any)=>{
              this.lat = monument.x,
              this.lng = monument.y,

                  this.markerse.push(
                      {
                          position: {
                              lat: monument.x,
                              lng: monument.y
                          },
                          options: {
                              draggable: false
                          },
                         // label: monument.nom
                      }
                  )
          })

      },
      error => {
        console.log(error)
      }
  )
}
 /* getvalue(u: any){
    this.pha = u;
    console.log(u.lat);
    const mylatlng = {lat: u.lat, lng:u.lng};
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: mylatlng
    });
    const marker = new google.maps.Marker({
      position: mylatlng,
      map:this.map,
      title:'hhh'
    });
    
    console.log(marker);


    
  }*/
  getPosition(){
    this.pharmapsservice.getposition().subscribe(
      (res) =>{
        console.log(res);
        this.postion=res;
      
       // console.log(this.getvalue(this.postion.lat) );
      },(err) =>{
        console.log(err)
      }
    )
  }
  getvalue()
  {

  }

}
