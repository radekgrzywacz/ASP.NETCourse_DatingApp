import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TimeagoClock, TimeagoModule } from 'ngx-timeago';
import { Message } from 'src/app/_models/message';

@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css'],
  standalone: true,
  imports: [CommonModule, TimeagoModule]
})
export class MemberMessagesComponent implements OnInit{
  @Input() username?: string;
  @Input() messages: Message[] = [];
  
  constructor() {}

  ngOnInit(): void {
  }

  

}
