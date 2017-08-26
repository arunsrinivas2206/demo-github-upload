import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: `./main.component.html`
})
export class MainComponent  {
	name: string;

	constructor() {
		this.name = "Temp";
	}

	onClicked() {
		console.log("clicked");
	}
}
