import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tagcloud',
  templateUrl: './tagcloud.component.html',
  styleUrls: ['./tagcloud.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TagcloudComponent implements OnInit {

  tags = [
    {title: 'בלוטת התריס', href: '#'},
    {title: 'הריון', href: '#'},
    {title: 'מתכוני רוקחות טבעית - עשי זאת בעצמך', href: '#'},
    {title: 'נפלאות השמנים האתרים', href: '#'},
    {title: 'סדנאות רוקחות - לוח ארועים', href: '#'},
    {title: 'פוריות', href: '#'},
    {title: 'רוקחות טבעית', href: '#'},
    {title: 'רפואה סינית', href: '#'},
    {title: 'רפואה סינית לנשים', href: '#'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
