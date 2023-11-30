import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color : white
    }
  `],
})
export class ServerComponent {

  serverStatus = "offline";
  isServerOnline = false;

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
    this.isServerOnline = (this.serverStatus === "online"? true : false);
  }

  getColor() {
    return this.serverStatus === "online"? "green" : "red";
  }
}
