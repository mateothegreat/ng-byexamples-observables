import { Component }                from '@angular/core';
import { ComponentsSharingService } from '../components-sharing.service';

@Component({
    selector: 'app-components-sharing-b',
    templateUrl: './components-sharing-b.component.html',
    styleUrls: [ './components-sharing-b.component.scss' ]
})
export class ComponentsSharingBComponent {

    public constructor(public componentsSharingService: ComponentsSharingService) {

    }

}
