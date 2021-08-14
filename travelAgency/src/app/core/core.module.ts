import { NgModule, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorage } from './injectionToken';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [{
    provide: LocalStorage,
    useFactory: (usedPlatform: Object) => {
      if (isPlatformBrowser(usedPlatform)) {
        return window.localStorage;
      }
      if (isPlatformServer(usedPlatform)) {

        return class implements Storage {
          length = 0;
          private data: Record<string, string> = {};
          clear(): void {
            this.data = {};
          }

          getItem(key: string): string | null {
            return this.data[key];
          }

          key(index: number): string | null {
            throw new Error('Method not implemented.');
          }

          removeItem(key: string): void {
            const { [key]: toRemove, ...remaining } = this.data;
            this.data = remaining;
          }
          setItem(key: string, value: string): void {
            this.data[key] = value;
          }
        }
      }
      throw Error('Not Implemented!');
    },
    deps: [PLATFORM_ID]
  },
    AuthGuardService
  ],
})
export class CoreModule { }