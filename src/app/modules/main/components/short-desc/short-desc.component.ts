import {Component, OnInit} from '@angular/core';
import {ILink} from "../../../../shared/models/interfaces";

@Component({
  selector: 'app-short-desc',
  templateUrl: './short-desc.component.html',
  styleUrls: ['./short-desc.component.scss']
})
export class ShortDescComponent implements OnInit {

  socialMedia: ILink[] = [
    {
      title: 'LinkedIn',
      icon: 'fab fa-linkedin',
      link: 'https://www.linkedin.com/in/youness-chaoui-164338125/'
    },
    {
      title: 'Twitter',
      icon: 'fab fa-twitter-square',
      link: 'https://twitter.com/Youness_CHAOUI'
    },
    {
      title: 'Github',
      icon: 'fab fa-github',
      link: 'https://github.com/Youness-CHAOUI'
    },
    {
      title: 'Instagram',
      icon: 'fab fa-instagram',
      link: 'https://www.instagram.com/youness.chaoui.15'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
