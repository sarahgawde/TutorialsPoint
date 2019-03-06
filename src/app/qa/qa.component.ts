import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.css']
})
export class QaComponent implements OnInit {
  public data;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.data = this.route.snapshot.paramMap.get('$data')
  }

}
