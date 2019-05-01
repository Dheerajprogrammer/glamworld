import { Component, OnInit } from '@angular/core';
import { Markup } from './markup/markup';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Markup]
})
export class AppComponent implements OnInit {
  public Header: any;
  public Footer: any;
  constructor(private markup: Markup, private spinner: NgxSpinnerService){
    this.Header = markup.Header;
    this.Footer = markup.Footer;
  }

  
  ngOnInit() {
    console.log('coming here');
    this.spinner.show();
 
    setTimeout(() => {
        this.spinner.hide();
    }, 5000);
  }


  title = 'glamworld';
}
