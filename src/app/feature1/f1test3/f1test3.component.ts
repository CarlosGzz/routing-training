import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-f1test3',
  templateUrl: './f1test3.component.html',
  styleUrls: ['./f1test3.component.css'],
})
export class F1test3Component implements OnInit {
  radData = {
    url: {},
    path: '',
    data: {},
    routerConfig: {},
  };
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.parent.url.subscribe(url => {
      console.log(url[0].path);
      this.radData.url = url;
    });

    this.route.url.subscribe(url => {
      console.log(url[0].path);
      this.radData.path = url[0].path;
    });

    this.route.data.subscribe(data => {
      console.log(data);
      this.radData.data = data;
    });
    // this.radData.routerConfig = this.router.config;
    console.log(this.router.config);
  }
}
