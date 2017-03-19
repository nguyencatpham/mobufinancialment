import { TestBed, async, inject } from '@angular/core/testing';

import { CheckloginGuard } from './checklogin.guard';

describe('CheckloginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckloginGuard]
    });
  });

  it('should ...', inject([CheckloginGuard], (guard: CheckloginGuard) => {
    expect(guard).toBeTruthy();
  }));
});
