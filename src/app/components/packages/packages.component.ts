import { fade, slideLeft } from '../../animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss'],
  animations: [
      fade,
      slideLeft
  ]
})
export class PackagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
