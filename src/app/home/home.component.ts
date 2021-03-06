import { Component, OnInit } from '@angular/core';
import { GetPostsService } from '../get-posts.service';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
h1Style:boolean=false;
user:Object;

  constructor(private data:GetPostsService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data=>{
      this.user=data
    console.log(this.user);

    });
  }

firstClick(){
console.log("aa");
this.h1Style=!this.h1Style;
}
}
