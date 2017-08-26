import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes  = [
	{
		path: '',
		component: MainComponent
	},
	{
		path: 'services',
		component: ServicesComponent
	},
	{
		path: 'blog',
		component: BlogComponent
	},
	{
		path: 'contact',
		component: ContactComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);



