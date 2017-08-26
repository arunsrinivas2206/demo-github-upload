import { Component } from '@angular/core';

@Component({
  selector: 'my-header',
  templateUrl: `./header.component.html`,
})
export class HeaderComponent  { 
	menu1:string;
	menu2:string;
	menu3:string;
	menu4:string;

	constructor() {
		this.menu1 = "Home";
		this.menu2 = "Services";
		this.menu3 = "Blog";
		this.menu4 = "Contact";
	}
}
