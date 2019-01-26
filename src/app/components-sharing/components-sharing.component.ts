import { Component }                from '@angular/core';
import { ComponentsSharingService } from './components-sharing.service';

@Component({
    selector: 'app-components-sharing',
    templateUrl: './components-sharing.component.html',
    styleUrls: [ './components-sharing.component.scss' ]
})
export class ComponentsSharingComponent {

    public events: Array<string> = [];

    public listeners: Array<any> = [];

    public constructor(private componentsSharingService: ComponentsSharingService) {

        componentsSharingService.stream$.subscribe((event: string) => {

            this.events.push(event);

        });

        console.log(componentsSharingService.stream$.observers);

    }

}
