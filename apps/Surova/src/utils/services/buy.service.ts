import { Injectable, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { User } from '../store/user.store';


@Injectable({
  providedIn: 'root'
})
export class BuyService {
  auth = inject(Auth)
  UserStore = inject(User)
  
}
