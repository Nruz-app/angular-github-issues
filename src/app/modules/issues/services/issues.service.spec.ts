import { TestBed } from '@angular/core/testing';
import { IssuesService } from './issues.service';

import { provideTanStackQuery, withDevtools } from '@tanstack/angular-query-experimental';
import { QueryClient } from '@tanstack/query-core';


import { State } from '../interfaces/github-issue.interface';

describe('IssuesService', () => {
  let service: IssuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      teardown: {
        //Que NO se destruya despues de cada test
        destroyAfterEach: false,
      },
      providers: [
        provideTanStackQuery(new QueryClient(), withDevtools()),
      ],
    });

    service = TestBed.inject(IssuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load labels', async () => {

    //Recarga la ultima query de labels
    const { data } = await service.labelQuery.refetch();
    // console.log(service.labelsQuery.data());

    expect(data?.length).toBe(30);

    const [label] = data!;

    expect(typeof label.color).toBe('string');
    expect(typeof label.default).toBe('boolean');
    expect(typeof label.description).toBe('string');
    expect(typeof label.id).toBe('number');
    expect(typeof label.name).toBe('string');
    expect(typeof label.node_id).toBe('string');
    expect(typeof label.url).toBe('string');
  });

  it('should set selected state, OPEN, CLOSED, ALL', async () => {
    service.showIssuesByState(State.Closed);
    expect(service.selectedState()).toBe(State.Closed);

    //Recarga la ultima query de issues
    const { data } = await service.issuesQuery.refetch();

    data?.forEach((issue) => {
      expect(issue.state).toBe(State.Closed);
    });

    service.showIssuesByState(State.Open);

    const { data: dataOpen } = await service.issuesQuery.refetch();

    dataOpen?.forEach((issue) => {
      expect(issue.state).toBe(State.Open);
    });

  });

  it('should set selectedLabels', async () => {
    service.toggleLabel('Accessibility');
    expect(service.selectedLabels().has('Accessibility')).toBeTrue();

    service.toggleLabel('Accessibility');
    expect(service.selectedLabels().has('Accessibility')).toBeFalse();
  });

  it('should set selectedLabels and get issues by label', async () => {
    const label = 'Accessibility';

    service.toggleLabel(label);
    expect(service.selectedLabels().has(label)).toBeTrue();

    const { data } = await service.issuesQuery.refetch();

    data?.forEach((issue) => {
      const hasLabel = issue.labels.some((l) => l.name === label);
      expect(hasLabel).toBeTrue();
    });
  });
});
