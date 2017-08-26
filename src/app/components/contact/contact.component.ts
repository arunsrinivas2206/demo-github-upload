import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: `./contact.component.html`
})
export class ContactComponent  {
	output: string;
	disableBtn: boolean;

	username: string;
	email:string;
	mobile:number;
	subject:string;
	message:string;

	constructor() {
		this.output = "FITA";
		this.disableBtn = true;

		this.email = "ganesh@gmail.com";
		this.mobile = 9876543210;
	}

	onKeyup(e: any) {
		console.log(e.target.value);
		this.output = e.target.value;
	}

	onFormSubmit() {
		console.log("on form submit");
		console.log(this.username);
		console.log(this.email);
		console.log(this.mobile);
		console.log(this.subject);
		console.log(this.message);
		this.username = '';
	}

	validate() {
		console.log("validate");
		if(this.username && this.email && this.mobile && this.subject && this.message) {
			this.disableBtn = false;
		} else {
			this.disableBtn = true;
		}
	}
}
