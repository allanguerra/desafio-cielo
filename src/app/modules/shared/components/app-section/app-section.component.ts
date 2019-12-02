import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './app-section.component.html',
  styleUrls: ['./app-section.component.scss']
})
export class AppSectionComponent implements OnInit {
  
  @Input()
  title: string;

  @Input()
  subtitle: string;

  constructor() { }

  ngOnInit() {
  }

}
