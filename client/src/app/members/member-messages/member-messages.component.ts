import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TimeagoClock, TimeagoModule } from 'ngx-timeago';
import { Message } from 'src/app/_models/message';
import { MessageService } from 'src/app/_services/message.service';

@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css'],
  standalone: true,
  imports: [CommonModule, TimeagoModule, FormsModule  ]
})
export class MemberMessagesComponent implements OnInit{
  @ViewChild('messageForm') messageForm?: NgForm; 
  @Input() username?: string;
  @Input() messages: Message[] = [];
  messageContent = '';
  
  constructor(private messagesService: MessageService) {}

  ngOnInit(): void {
  }

  sendMessage() {
    if (!this.username) return;
    this.messagesService.sendMessage(this.username, this.messageContent).subscribe({
      next: message => {
        this.messages.push(message);
        this.messageForm?.reset();
      }
    })

    }
}
