import { ChangeDetectionStrategy, Component, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  @Input() user!: { name: string };
  @Input() checkstring!: string;


  constructor() {
    console.log("6️⃣ HomeComponent constructor");
  }

  ngOnInit() {
    console.log("7️⃣ HomeComponent ngOnInit");

  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('HomeComponent ngOnChanges', changes);
    this.checkstring = "hamza shamim"
  }
  ngDoCheck() {
    console.log('ngDoCheck Manual change detection running');
  }
  ngOnDestroy() {
    console.log("Home destroyed");
  }

  check() {

  }

  ngAfterContentInit() {
    console.log('Projected content ready');
  }
  ngAfterContentChecked() {
    console.log('Content checked again', this.user.name);
  }
  // @ViewChild('myInput') input!: ElementRef;

  ngAfterViewInit() {
    // this.input.nativeElement.focus();
    console.log('ngAfterViewInit run after children load');

  }

  ngAfterViewChecked() {
    console.log("View checked again");
  }
}
