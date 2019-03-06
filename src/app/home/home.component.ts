import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data;
  constructor(private router: Router ) { }  

    fun1(){
      this.router.navigate(['qa', 'ts']);
    }
  
  
 
  ngOnInit() {

    
  }

}
