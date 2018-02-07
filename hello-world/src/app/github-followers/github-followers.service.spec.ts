import { TestBed, inject } from '@angular/core/testing';

import { GithubFollowers.Service.TsService } from './github-followers.service.ts.service';

describe('GithubFollowers.Service.TsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubFollowers.Service.TsService]
    });
  });

  it('should be created', inject([GithubFollowers.Service.TsService], (service: GithubFollowers.Service.TsService) => {
    expect(service).toBeTruthy();
  }));
});
