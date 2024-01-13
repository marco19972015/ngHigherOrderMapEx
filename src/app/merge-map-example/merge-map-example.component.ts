import { Component } from '@angular/core';
import { concatMap, delay, mergeMap, of, range, tap } from 'rxjs';

@Component({
  selector: 'app-merge-map-example',
  templateUrl: './merge-map-example.component.html',
  styleUrls: ['./merge-map-example.component.css']
})
export class MergeMapExampleComponent {
  // With mergeMap active we will recieve most if not all the values before the values in concat-map

  ngOnInit(): void {

    // range emits ints in a given range of values
    range(11, 5).pipe(
      // mergeMap returns the range of numbers as soon as it can
      mergeMap(i => of(i).pipe(
        // delay operator takes in the amount of delay in milli seconds
        delay(this.randomDelay())
      ))
    ).pipe(
      tap((v) => console.log('mergeMap:', v))
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
