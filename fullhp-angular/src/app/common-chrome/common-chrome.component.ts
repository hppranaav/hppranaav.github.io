import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-common-chrome',
  templateUrl: './common-chrome.component.html',
  styleUrls: ['./common-chrome.component.scss']
})
export class CommonChromeComponent implements OnInit {
  menuItems: MenuItem[];
  firstName: string;
  lastName: string;

  constructor() {
    this.menuItems = [];
    this.firstName = '';
    this.lastName = '';
  }

  ngOnInit(): void {

    this.firstName = 'Pranaav';
    this.lastName = 'H P';

    this.menuItems = [
      {
        label: 'About Me',
      },
      {
        label: 'Resume'
      },
      {
        label: 'Projects',
        items: [{
          label: 'Front-end'
        },
        {
          label: 'Back-end'
        },
        {
          label: 'Random'
        }
      ]
      },
      {
        label: 'Blog'
      },
      {
        label: 'Contact'
      }
    ];
  }

}
