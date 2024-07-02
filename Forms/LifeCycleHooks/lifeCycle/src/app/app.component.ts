import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  constructor() {
    console.log('1. Constructor called');
  }
  ngOnInit(): void {
    console.log('2. ngOnInit called');
  }
  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    console.log('Input changed:', inputElement.value);
  }

  ngOnChanges(): void {
    console.log('3. ngOnChanges called');
  }

  ngDoCheck(): void {
    console.log('4. ngDoCheck called');
  }

  ngAfterContentInit(): void {
    console.log('5. ngAfterContentInit called');
  }

  ngAfterContentChecked(): void {
    console.log('6. ngAfterContentChecked called');
  }

  ngAfterViewInit(): void {
    console.log('7. ngAfterViewInit called');
  }

  ngAfterViewChecked(): void {
    console.log('8. ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    console.log('9. ngOnDestroy called');
  }
}
