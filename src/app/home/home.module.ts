import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MenuComponent } from './menu/menu.component';

import { FormsModule } from '@angular/forms';

import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IndexComponent } from './index/index.component';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    HomeComponent, 
    MenuComponent, IndexComponent, ProductsComponent, SettingsComponent, ItemViewComponent, ProductDialogComponent, ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatSliderModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatDialogModule,
    MatRadioModule,
    MatSlideToggleModule,
    FormsModule,
    MatListModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatStepperModule,
    MatSidenavModule,
    MatBadgeModule
  ]
})
export class HomeModule { }
