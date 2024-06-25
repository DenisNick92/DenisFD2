import { Component, inject } from '@angular/core';
import { SubscriberCardComponent } from './subscriber-card/subscriber-card.component';
import { RouterLink, RouterModule } from '@angular/router';
import { ProfileService } from '../../data/services/profile.service';
import { ImgUrlPipe } from '../../helpers/pipes/img-url.pipe';
import { CommonModule } from '@angular/common';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SubscriberCardComponent, CommonModule, RouterModule, ImgUrlPipe, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
profileService: ProfileService = inject(ProfileService)
subscribers$ = this.profileService.getSubscribersShortlist()
me = this.profileService.me


ngOnInit() {
  firstValueFrom(this.profileService.getMe())
}

}

