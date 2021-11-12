import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private api: ApiService) {}

  Listar(){
    this.api.getPersonas().subscribe(
      (res)=>{
        console.log(res);
      },
      (e)=>{
        console.log(e);
      }

    );
  }

}
