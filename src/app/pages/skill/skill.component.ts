import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import * as AOS from 'aos';

import { MY_SKILLS } from 'src/app/shared/constants/my-skills.constant';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class SkillComponent implements OnInit {
  public mySkills = MY_SKILLS;

  ngOnInit(): void {
    AOS.init({});
  }
}
