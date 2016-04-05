import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component'

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent]
})

export class AppComponent {
	mainHeading = Config.MAIN_HEADING;
	videos: Array<Video>;

	constructor(){
		this.videos = [
			new Video(1, "MarIO", "qv6UVOQ0F44", "I like NN!"),
			new Video(2, "Marching cats!", "lAIGb1lfpBw", "I like cats!"),
			new Video(3, "PPG", "GbvC9Xtpm_8", "Sugar Spice and everything nice!")
		]
	}
}
