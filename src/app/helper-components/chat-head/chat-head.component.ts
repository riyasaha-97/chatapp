import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'chat-head',
  templateUrl: './chat-head.component.html',
  styleUrls: ['./chat-head.component.css'],
})
export class ChatHeadComponent implements OnInit {
  @Input('isMinified') isMinified: Boolean = false;
  constructor() {}
  ngOnInit(): void {}
}
