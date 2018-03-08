import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MarkovModelService} from '../../markov-model.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit {
  constructor(private route: ActivatedRoute, private markovModelService: MarkovModelService) {
    this.markovModelService.updateCurrentModule(this.route.parent.routeConfig.path);
  }

  ngOnInit() {}
}
