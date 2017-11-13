import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  myOptions = [
    {value: 'a', label: 'A'},
    {value: 'b', label: 'B'},
    {value: 'c', label: 'C'},
  ]

  remoteOptions = [];

  constructor(private http:Http) {}

  filterInputChanged(term) {
    var url = 'https://api.github.com/search/repositories?q=' + term;
    this.http.get(url).map(res => {
      return res.json();
    }).subscribe(repos => {
      this.remoteOptions = [];
      for(var i = 0; i < repos.items.length; ++i) {
        this.remoteOptions.push({value: repos.items[i]['id'].toString(), label: repos.items[i]['full_name']})
      }
    });
  }
}
