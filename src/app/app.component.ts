import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServersComponent } from './servers/servers.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public router: Router) {
    this.router.config.unshift(
      { path: 'servers', component: ServersComponent }
    )
    console.log(this.router.config);
  }
}
