import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';

import ptBr from '@angular/common/locales/pt'; // necessário a partir do Angular v5
import { registerLocaleData } from '@angular/common';
import { FiltroArrayPipe } from './filtro-array.pipe'; // necessário a partir do Angular v5
registerLocaleData(ptBr); // necessário a partir do Angular v5

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
     /*{
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }*/
    /* SettingsService,
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: ptbrLocale
    } */
    { provide: LOCALE_ID, useValue: 'pt' } // necessário a partir do Angular v5 pt-BR nao é mais suportado
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
