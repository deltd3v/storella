import {Observable} from 'rxjs';
import {Component, OnInit} from '@angular/core';
import {map, shareReplay} from 'rxjs/operators';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthGuard} from 'src/app/user/auth.guard';

@Component({
	selector: 'app-app-nav-shell',
	templateUrl: './app-nav-shell.component.html',
	styleUrls: ['./app-nav-shell.component.scss'],
})
export class AppNavShellComponent implements OnInit {
	constructor(
		private breakPointObserver: BreakpointObserver,
		public angularFireAuth: AngularFireAuth
	) {}

	// Listen to the window view port width by setting a break point observer
	handset$: Observable<boolean> = this.breakPointObserver
		.observe([Breakpoints.Handset])
		.pipe(
			map((_) => _.matches),
			shareReplay()
		);

	ngOnInit(): void {}
}
