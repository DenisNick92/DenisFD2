import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Profile } from '../Interfaces/profile.interface';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  http :HttpClient = inject(HttpClient);
  me = signal<Profile | null>(null)


  getTestAccounts()   {
    return this.http.get<Profile[]>('https://icherniakov.ru/yt-course/account/test_accounts');
  }

  getSubscribersShortlist() {
    return this.http.get<Profile[]>('https://icherniakov.ru/yt-course/account/test_accounts');
    
  }

  getMe()   {
    return this.http.get<Profile>('https://icherniakov.ru/yt-course/account/me')
    .pipe(
      tap( res => this.me.set(res))
    )
  }
  getAccount (id:string) {
    return this.http.get<Profile>('https://icherniakov.ru/yt-course/account/${id}')
  }

}
