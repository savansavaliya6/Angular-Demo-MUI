import { Component, OnInit } from '@angular/core';
import { MessageService } from './services/message/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Test-angular';
  message: string;

  constructor(private messageService: MessageService) { }
  
  ngOnInit() {
    this.messageService.currentMessage.subscribe((message) => {
      this.message = message;
    });
  }
}
