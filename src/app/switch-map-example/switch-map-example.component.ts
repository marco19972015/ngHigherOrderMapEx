import { Component } from '@angular/core';
import { concatMap, delay, of, range, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-switch-map-example',
  templateUrl: './switch-map-example.component.html',
  styleUrls: ['./switch-map-example.component.css']
})
export class SwitchMapExampleComponent {

  ngOnInit(): void {

    // range emits ints in a given range of values
    range(21, 5).pipe(
      // concatMap expected a return of type observable
      switchMap(i => of(i).pipe(
        // delay operator takes in the amount of delay in milli seconds
        delay(this.randomDelay())
      ))
    ).pipe(
      tap((v) => console.log('switchMap:', v))
    )
    .subscribe()
  }

  randomDelay(){
    // Random delay between 500 and 1499 milliseconds
    // Math.random() creates a number between 0 and 1
    // Math.floor lets us round down
    return Math.floor(Math.random() * 1000) + 500;
  }

}
