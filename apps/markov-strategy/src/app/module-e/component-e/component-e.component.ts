import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MarkovModelService} from '../../markov-model.service';

@Component({
  selector: 'app-component-e',
  templateUrl: './component-e.component.html',
  styleUrls: ['./component-e.component.css']
})
export class ComponentEComponent implements OnInit {
  constructor(private route: ActivatedRoute, private markovModelService: MarkovModelService) {
    this.markovModelService.updateCurrentModule(this.route.parent.routeConfig.path);
  }


  ngOnInit() {}
}
