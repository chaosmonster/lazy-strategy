import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MarkovModelService} from '../../markov-model.service';

@Component({
  selector: 'app-component-d',
  templateUrl: './component-d.component.html',
  styleUrls: ['./component-d.component.css']
})
export class ComponentDComponent implements OnInit {
  constructor(private route: ActivatedRoute, private markovModelService: MarkovModelService) {
    this.markovModelService.updateCurrentModule(this.route.parent.routeConfig.path);
  }


  ngOnInit() {}
}
