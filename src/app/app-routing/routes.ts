import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { DishDetailsComponent } from '../dish-details/dish-details.component';
import { DishService} from '../services/dish.service';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { Component } from '@angular/core';

export const ROUTES : Routes =[
    { path:'home', component: HomeComponent },
    { path:'menu', component: MenuComponent },
    { path:'contactus', component: ContactComponent },
    { path:' ', redirectTo:'/home', pathMatch:'full'}
];