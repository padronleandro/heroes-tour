import { Component, OnInit } from 'angular2/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

	@Component({
	  selector: 'my-dashboard',
	  template: `<h3>My Dashboard</h3>
	  			 <h3>Top Heroes</h3>
				<div class="grid grid-pad">
	    			<div *ngFor="#hero of heroes" (click)="gotoDetail(hero)" class="col-1-4" >
	        			<div class="module hero">
	            			<h4>{{hero.name}}</h4>
	        			</div>
	    			</div>
				</div>`
	})
	export class DashboardComponent {
	  heroes: Hero[] = [];
	  constructor(private _heroService: HeroService) { }
	  ngOnInit() {
	    this._heroService.getHeroes()
	      .then(heroes => this.heroes = heroes.slice(1,5));
	  }
	  gotoDetail(){ /* not implemented yet */}
	}