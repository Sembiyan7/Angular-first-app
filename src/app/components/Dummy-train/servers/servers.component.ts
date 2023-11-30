import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  showButton = false;
  serverName = "";
  isServerCreated = false;
  servers = ["TestServer", "TestServer2"];

  constructor() {
    setTimeout(() => {
      this.showButton = true;
    }, 2500);
  }

  onButtonclick() {
    this.isServerCreated = true;
    this.servers.push(this.serverName);
  }
}
