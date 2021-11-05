import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // Choisis tes propres titre et sous-titre !
  @Input() title!: string;
  @Input() subtitle!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
