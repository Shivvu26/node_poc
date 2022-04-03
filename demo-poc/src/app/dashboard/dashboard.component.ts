import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  createDomain: any;
  fetchDomainListFlag: any;
  selectedDomainId: number;
  profileFlag: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  sendToNewDomain($event) {
    this.createDomain = $event;
  }

  sendToDomainList($event) {
    this.fetchDomainListFlag = $event;
  }


  sendSelectedDomain($event) {
    this.selectedDomainId = $event;
  }
}
