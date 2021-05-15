import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageSenderComponent } from './helper-components/message-sender/message-sender.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatHeadComponent } from './helper-components/chat-head/chat-head.component';
import { MessageComponent } from './helper-components/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageSenderComponent,
    ChatHeadComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
