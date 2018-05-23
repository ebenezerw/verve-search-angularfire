import { Component, OnInit } from '@angular/core';
import { SearchmanService } from '../searchman.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-meta',
  templateUrl: './meta.component.html',
  styleUrls: ['./meta.component.scss']
})
export class MetaComponent implements OnInit {

  searchData: string;
  opSystem: string;
  apps: Observable<any>;

  constructor(private app: SearchmanService) { }

  ngOnInit() {
    this.searchData = "com.facebook.orca,com.pandora.android"
    this.opSystem = "android"
  }

  getApps() {
    this.apps = this.app.currentApps(this.searchData, this.opSystem)
    .pipe(map(data => console.log(data)))
  }

}
