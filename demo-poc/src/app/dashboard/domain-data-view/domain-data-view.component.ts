import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {NotifyFlashMessageService} from '../../shared/services/notify-flash-message.service';

@Component({
  selector: 'app-domain-data-view',
  templateUrl: './domain-data-view.component.html',
  styleUrls: ['./domain-data-view.component.scss']
})
export class DomainDataViewComponent implements OnInit {

  @Input() createDomain: number;

  @Output() getDomain = new EventEmitter<any>();

  @Input() selectedDomainId: number;

  constructor(private _alertService: NotifyFlashMessageService) {

  }

  ngOnInit(): void {
  }
  
}
