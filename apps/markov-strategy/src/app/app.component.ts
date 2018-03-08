import { Component, OnInit } from '@angular/core';
import {MarkovModelService} from './markov-model.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  nextModule = 'module-a';
  hide = true;

  constructor(public markovModuleService: MarkovModelService) {}

  ngOnInit() {}

  update() {
    this.markovModuleService.updateCurrentModule(this.nextModule);
  }
}
