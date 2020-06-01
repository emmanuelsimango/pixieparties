import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
  declarations: [
      ContactComponent,NavbarComponent,FooterComponent, SliderComponent, CarouselComponent
    ],
  imports: [
    CommonModule
  ],
  exports:[
    ContactComponent,NavbarComponent,FooterComponent, SliderComponent,CarouselComponent

  ]
})
export class ComponentsModule { }
