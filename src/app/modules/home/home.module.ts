import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  declarations: [HomeComponent, HeroComponent],
  imports: [CommonModule],
})
export class HomeModule {}
