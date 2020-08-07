import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.scss']
})
export class DishDetailsComponent implements OnInit {

  dish: Dish;
  
    constructor(private dishservice: DishService,
      private route: ActivatedRoute,
      private location: Location) { }
  
    ngOnInit() {
      const id = +this.route.snapshot.params['id'];
      this.dishservice.getDish(id.toString())
        .then(dish => this.dish = dish);
    }
  
    goBack(): void {
      this.location.back();
    }
  
  }