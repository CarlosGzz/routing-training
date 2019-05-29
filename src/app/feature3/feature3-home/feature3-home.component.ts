import { Feature3Service } from './../feature3.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature3-home',
  templateUrl: './feature3-home.component.html',
  styleUrls: ['./feature3-home.component.css'],
})
export class Feature3HomeComponent implements OnInit {
  constructor(private feature3Service: Feature3Service) {}

  ngOnInit() {}

  toggleActive() {
    this.feature3Service.toggleActivation();
  }
}
