import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {NotifyFlashMessageService} from '../../shared/services/notify-flash-message.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  adminFlag: boolean = false;
  selectedPageUrl: string = this.router.url;
  closeResult: string;

  constructor(private router: Router, private modalService: NgbModal, private alertService: NotifyFlashMessageService) { }

  ngOnInit(){
    console.log(this.selectedPageUrl);
    console.log(this.router.url);
  }

  ngOnChanges() {
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  onLogout() {
    localStorage.setItem('Token', null);
    this.modalService.dismissAll();
    this.router.navigate(['/login']);
    this.alertService.success("Logged Out");

  }
}
