import { Injectable }    from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ComponentsSharingService {

    public stream$: ReplaySubject<string> = new ReplaySubject();

    public constructor() {

    }

    public send(event: string): void {

        this.stream$.next(event);

    }

}
