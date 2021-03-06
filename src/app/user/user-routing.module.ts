import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {LoginPageComponent} from './login-page/login-page.component';

const routes: Routes = [{path: '', component: LoginPageComponent}];

@NgModule({
	imports: [SharedModule, RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class UserRoutingModule {}
