import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Subject } from 'rxjs';
import { exhaustMap, tap, finalize } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule, HomeComponent],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  @Input() check: string = 'my name is hamza shami';

  counter = 0;
  user = { name: 'Alice' };
  private paymentClick$ = new Subject<void>();
  loading = false;
  responseData: any;

  constructor(private http: HttpClient) {
    console.log("3️⃣ AppComponent constructor");
    console.log(this.counter)
  }


  ngOnInit(): void {
    console.log("5️⃣ AppComponent ngOnInit");


    this.paymentClick$
      .pipe(
        tap(() => {
          console.log('Button clicked');
          this.loading = true;
        }),
        exhaustMap(() =>
          this.http.post('https://jsonplaceholder.typicode.com/posts', {
            amount: 100,
            currency: 'USD'
          }).pipe(
            finalize(() => {
              this.loading = false;
              console.log('Request completed');
            })
          )
        )
      )
      .subscribe({
        next: (res) => {
          console.log('Payment Success:', res);
          this.responseData = res;
        },
        error: (err) => {
          console.error('Payment Failed:', err);
        }
      });
  }

  makePayment() {
    this.paymentClick$.next();
  }

  increment() {
    this.counter++;
    this.user = { name: 'Bob ' + this.counter };
    console.log('User changed:', this.user.name);
    this.check = 'value changed! my name is hamza shamim';
  }

  ngDoCheck() {
    console.log('ngDoCheck Manual change detection running Appppp');
  }


  ngAfterViewInit() {
    // this.input.nativeElement.focus();
    console.log('ngAfterViewInit run after children load');

  }
}