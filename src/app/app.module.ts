import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { from } from 'rxjs';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule   } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthGuard as AuthGuard } from './auth-guard.service';
import { AdminAuthGaurd as AdminAuthGaurd } from './admin-auth-gaurd.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [
      AuthService,
      AuthGuard,
      UserService,
      AdminAuthGaurd
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
