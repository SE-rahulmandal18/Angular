import { Component } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  filterBy: any;
  usersList: User[] = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincer@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '9564-2424',
        geo: {
          lat: '-37.2465',
          lng: '81.554',
        },
      },
      phone: '1-770-736-8032 x53353',
      website: 'hiidegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client neural-net',
        bs: 'harness real -time e-markets',
      },
    },
    {
      id: 2,
      name: 'Hiroshi Yamamoto',
      username: 'Bret',
      email: 'Sincer@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '9564-2424',
        geo: {
          lat: '-37.2465',
          lng: '81.554',
        },
      },
      phone: '1-770-736-8032 x53353',
      website: 'hiidegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client neural-net',
        bs: 'harness real -time e-markets',
      },
    },

    {
      id: 1,
      name: 'Isabella Rossi ',
      username: 'Bret',
      email: 'Sincer@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '9564-2424',
        geo: {
          lat: '-37.2465',
          lng: '81.554',
        },
      },
      phone: '1-770-736-8032 x53353',
      website: 'hiidegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client neural-net',
        bs: 'harness real -time e-markets',
      },
    },

    {
      id: 1,
      name: 'Rafael Hernandez',
      username: 'Bret',
      email: 'Sincer@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '9564-2424',
        geo: {
          lat: '-37.2465',
          lng: '81.554',
        },
      },
      phone: '1-770-736-8032 x53353',
      website: 'hiidegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client neural-net',
        bs: 'harness real -time e-markets',
      },
    },

    {
      id: 1,
      name: 'Leila Mansour ',
      username: 'Bret',
      email: 'Sincer@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '9564-2424',
        geo: {
          lat: '-37.2465',
          lng: '81.554',
        },
      },
      phone: '1-770-736-8032 x53353',
      website: 'hiidegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client neural-net',
        bs: 'harness real -time e-markets',
      },
    },

    {
      id: 1,
      name: 'Lars Andersen',
      username: 'Bret',
      email: 'Sincer@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '9564-2424',
        geo: {
          lat: '-37.2465',
          lng: '81.554',
        },
      },
      phone: '1-770-736-8032 x53353',
      website: 'hiidegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client neural-net',
        bs: 'harness real -time e-markets',
      },
    },

    {
      id: 1,
      name: 'Sophia Kowalsk',
      username: 'Bret',
      email: 'Sincer@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '9564-2424',
        geo: {
          lat: '-37.2465',
          lng: '81.554',
        },
      },
      phone: '1-770-736-8032 x53353',
      website: 'hiidegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client neural-net',
        bs: 'harness real -time e-markets',
      },
    },
  ];


  onAddUser() {
    this.usersList.push({
      id: Math.floor(Math.random() * 10000),
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincer@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '9564-2424',
        geo: {
          lat: '-37.2465',
          lng: '81.554',
        },
      },
      phone: '1-770-736-8032 x53353',
      website: 'hiidegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client neural-net',
        bs: 'harness real -time e-markets',
      }
    })
  }
}