import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MarkovModelService} from '../../markov-model.service';

@Component({
  selector: 'app-component-c',
  templateUrl: './component-c.component.html',
  styleUrls: ['./component-c.component.css']
})
export class ComponentCComponent implements OnInit {
  constructor(private route: ActivatedRoute, private markovModelService: MarkovModelService) {
    this.markovModelService.updateCurrentModule(this.route.parent.routeConfig.path);
  }


  ngOnInit() {}
}
