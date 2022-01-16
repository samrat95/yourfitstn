import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { environment } from 'src/environments/environment';
import { HomepageComponent } from './homepage/homepage.component';
import { GyminfoComponent } from './gyminfo/gyminfo.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { BookingsComponent } from './bookings/bookings.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { AdminGyminfoComponent } from './admin/admin-gyminfo/admin-gyminfo.component';
import { AdminBookingsComponent } from './admin/admin-bookings/admin-bookings.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { UserService } from './user.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { NewgymFormComponent } from './admin/newgym-form/newgym-form.component';
import { CategoryService } from './category.service';
import { GymserviceService } from './gymservice.service';
import { GymFilterComponent } from './gyminfo/gym-filter/gym-filter.component';
import { GyminfoCardComponent } from './gyminfo-card/gyminfo-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    GyminfoComponent,
    ShoppingcartComponent,
    BookingsComponent,
    OrderSuccessComponent,
    MybookingsComponent,
    AdminGyminfoComponent,
    AdminBookingsComponent,
    NewgymFormComponent,
    GymFilterComponent,
    GyminfoCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      { path: '', component: HomepageComponent },
      { path: 'gyms', component: GyminfoComponent },
      { path: 'shopping-cart', component: ShoppingcartComponent },
      { path: 'bookings', component: BookingsComponent, canActivate: [AuthGuardService] },
      { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuardService] },
      { path: 'login', component: LoginComponent },
      { path: 'my-bookings', component: MybookingsComponent, canActivate: [AuthGuardService] },
      { 
        path: 'admin/gyminfo/new', 
        component: NewgymFormComponent, 
        canActivate: [AuthGuardService, AdminAuthGuardService] 
      },
      { 
        path: 'admin/gyminfo/:id', 
        component: NewgymFormComponent, 
        canActivate: [AuthGuardService, AdminAuthGuardService] 
      },
      { 
        path: 'admin/gyminfo', 
        component: AdminGyminfoComponent, 
        canActivate: [AuthGuardService, AdminAuthGuardService] 
      },
      { 
        path: 'admin/bookings', 
        component: AdminBookingsComponent, 
        canActivate: [AuthGuardService, AdminAuthGuardService] 
      }
    ]),
    NgbModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    AdminAuthGuardService,
    UserService,
    CategoryService,
    GymserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
