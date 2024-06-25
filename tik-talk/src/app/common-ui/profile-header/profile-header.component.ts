import { Component, input, Input } from '@angular/core';
import { Profile } from '../../data/Interfaces/profile.interface';
import { ImgUrlPipe } from '../../helpers/pipes/img-url.pipe';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-profile-header',
  standalone: true,
  imports: [ImgUrlPipe, CommonModule],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss'
})
export class ProfileHeaderComponent {

@Input() profile!: Profile

}
