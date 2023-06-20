import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app/app.component';
import { HeaderComponent } from './global/components/header/header.component';
import { BannerComponent } from './global/components/banner/banner.component';
import { BannerFavoriteComponent } from './global/components/banner-favorite/banner-favorite.component';
import { FooterComponent } from './global/components/footer/footer.component';
import { ListComponent } from './characters/components/list/list.component';
import { CardsComponent } from './characters/components/cards/cards.component';
import { HomeComponent } from './characters/views/home/home.component';
import { FavoritesComponent } from './characters/views/favorites/favorites.component';
import { MenuHambComponent } from './characters/components/menu-hamb/menu-hamb.component';
import { HomeMenuComponent } from './characters/components/home-menu/home-menu.component';
import { BodyhtmlComponent } from './global/components/bodyhtml/bodyhtml.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    ListComponent,
    CardsComponent,
    HomeComponent,
<<<<<<< Updated upstream
    FavoritesComponent,
    MenuHambComponent,
    HomeMenuComponent,
    BannerFavoriteComponent
=======
    FavoritesComponent,
    BodyhtmlComponent,
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
