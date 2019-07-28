import { TestBed } from '@angular/core/testing';

import { TimeReportsService } from './time-reports.service';

describe('TimeReportsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimeReportsService = TestBed.get(TimeReportsService);
    expect(service).toBeTruthy();
  });
});
