/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { SpinnerComponent } from './spinner.component';
import { SpinnerService } from './spinner.service';

describe('Component: Spinner', () => {
  it('should create an instance', () => {
    let component = new SpinnerComponent(new SpinnerService());
    expect(component).toBeTruthy();
  });
});
