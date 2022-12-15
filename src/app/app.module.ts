import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoardTopBarAccountComponent } from './app-components/board-top-bar-account/board-top-bar-account.component';
import { BoardTopBarMainMenuComponent } from './app-components/board-top-bar-main-menu/board-top-bar-main-menu.component';
import { BoardTopBarSearchComponent } from './app-components/board-top-bar-search/board-top-bar-search.component';
import { BoardLeftColumnCategoriesComponent } from './app-components/board-left-column-categories/board-left-column-categories.component';
import { BoardRightColumnTagsComponent } from './app-components/board-right-column-tags/board-right-column-tags.component';
import { BoardRouterPageDashboardComponent } from './app-components/board-router-page-dashboard/board-router-page-dashboard.component';
import { BoardRouterPageViewComponent } from './app-components/board-router-page-view/board-router-page-view.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ru_RU } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

registerLocaleData(ru);

@NgModule({
  declarations: [
    AppComponent,
    BoardTopBarAccountComponent,
    BoardTopBarMainMenuComponent,
    BoardTopBarSearchComponent,
    BoardLeftColumnCategoriesComponent,
    BoardRightColumnTagsComponent,
    BoardRouterPageDashboardComponent,
    BoardRouterPageViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: ru_RU }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
