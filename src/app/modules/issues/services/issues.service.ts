

import { Injectable, signal } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { getIssues, getLabels } from '../../';
import { State } from '../interfaces/github-issue.interface';

@Injectable({providedIn: 'root'})
export class IssuesService {

  selectedState  = signal<State>(State.All);
  selectedLabels = signal(new Set<string>()); // { 'a','b','c'}

  labelQuery = injectQuery( () => ({
    queryKey : ['labels'],
    queryFn : () => getLabels()
  }));

  /**************************************
  issuesQuery = injectQuery( () => ({
    queryKey: ['issues'],
    queryFn: () => getIssues()
  }))
  ****************************************/

  issuesQuery = injectQuery(() => ({
    queryKey: ['issues',{
        state: this.selectedState(),
        selectedLabels: [...this.selectedLabels()],
      },
    ],
    queryFn: () => getIssues(this.selectedState(), [...this.selectedLabels()]),
  }));

  showIssuesByState(state : State) {
    this.selectedState.set(state);
  }

  toggleLabel(label: string) {

    const labels = this.selectedLabels();

    if (labels.has(label))
      labels.delete(label);
    else
      labels.add(label);

    this.selectedLabels.set(new Set(labels));
  }

}
