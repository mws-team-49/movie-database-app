import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'app-header',
    styleUrls: ['./header.component.css'],
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    constructor(private navigate: Router) {

    }

    public faSearch = faSearch;

}