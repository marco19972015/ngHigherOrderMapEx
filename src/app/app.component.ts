import { Component, OnInit } from '@angular/core';
import { concatMap, delay, of, range, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'higher-order-mapping-exampels';

  ngOnInit(): void {

    // range emits ints in a given range of values
    range(1, 5).pipe(
      // concatMap expected a return of type observable
      concatMap(i => of(i).pipe(
        // delay operator takes in the amount of delay in milli seconds
        delay(this.randomDelay())
      ))
    ).pipe(
      tap((v) => console.log('concatMap:', v))
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
