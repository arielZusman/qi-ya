import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  menuItems = [
    {title: 'דף הבית', href: '#'},
    {title: 'רפואה סינית לנשים', href: '#'},
    {title: 'לימודי רוקחות טבעית', href: '#'},
    {title: 'כל הארועים', href: '#'},
    {title: 'קטלוג מוצרים', href: '#'},
    {title: 'הבלוג', href: '#'},
    {title: 'המלצות', href: '#'},
    {title: 'אודות', href: '#'},
    {title: 'יצירת קשר', href: '#'}
  ];

  constructor() { }
  menuVisible: false;

  ngOnInit() {
  }

}
