import { Component, Input } from '@angular/core';
import { IInfoDescription } from '../../interfaces/info-description.interface';

@Component({
    selector: 'app-title-description',
    templateUrl: './title-description.component.html',
    styleUrls: ['./title-description.component.scss'],
})
export class TitleDescriptionComponent {
    @Input() infoDescription!: IInfoDescription;

    constructor() { }
}
