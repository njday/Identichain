import { Component } from '@angular/core';
import { DataService, INotification } from '../../../../services/DataService';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent {
  notifications: INotification[];
  constructor(private dataService: DataService) {
    this.notifications = this.dataService.datastore.notifications.reverse();
  }
}
