import { Component }                from '@angular/core';
import { ComponentsSharingService } from '../components-sharing.service';

@Component({
    selector: 'app-components-sharing-a',
    templateUrl: './components-sharing-a.component.html',
    styleUrls: [ './components-sharing-a.component.scss' ]
})
export class ComponentsSharingAComponent {

    public constructor(public componentsSharingService: ComponentsSharingService) {

    }

}
