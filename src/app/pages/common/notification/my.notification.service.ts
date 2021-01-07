import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class MyNotificationService {
    constructor(private notifyService: NotificationsService) { }

    info(message: string) {
        this.notifyService.info('Information', message);
    }

    error(message: string) {
        this.notifyService.error('Error', message);
        console.log(message);
    }
    errorWithOptions(message: string, timeout: number) {
        this.notifyService.error('Error', message, { timeOut: timeout });
        console.log(message);
    }
    alert(message: string) {
        this.notifyService.alert('Alert', message);
    }

    success(message: string) {
        this.notifyService.success('Success', message);
    }
}   