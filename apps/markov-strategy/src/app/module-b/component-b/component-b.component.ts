import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MarkovModelService} from '../../markov-model.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit {
  constructor(private route: ActivatedRoute, private markovModelService: MarkovModelService) {
    this.markovModelService.updateCurrentModule(this.route.parent.routeConfig.path);
  }

  ngOnInit() {}
}
