

import { inject, Injectable, signal } from '@angular/core';
import { injectQuery, QueryClient } from '@tanstack/angular-query-experimental';
import { getIssueCommentsByNumber, getIssuesByNumber } from '../..';
import { GitHubIssue } from '../interfaces/github-issue.interface';

@Injectable({providedIn: 'root'})
export class IssueService {

  private readonly issueNumber = signal<string | null>(null);
  private readonly queryClient = inject(QueryClient);



  issueQuery = injectQuery( () => ({
    queryKey : ['issue',this.issueNumber()],
    enable   : () => this.issueNumber() !== null,
    queryFn : () => getIssuesByNumber(this.issueNumber()!)
  }));

  issueCommentsQuery = injectQuery( () => ({
    queryKey : ['issue',this.issueNumber(),'comments'],
    enable   : () => this.issueNumber() !== null,
    queryFn : () => getIssueCommentsByNumber(this.issueNumber()!)
  }));


  setIssueNumber(issueNumber: string) {
    this.issueNumber.set(issueNumber);
  }

  prefetchIssue(issueId : string) {

    this.queryClient.prefetchQuery({
      queryKey : ['issue',issueId],
      queryFn : () => getIssuesByNumber(issueId),
      staleTime : 1000 * 60 * 5 // 5 minutes
    });

  }

  seIssueData(issue : GitHubIssue) {
    this.queryClient.setQueryData( ['issue',issue.number.toString()],issue,{
      updatedAt : Date.now() + 1000 * 60 * 5 // 5 minutes
    });
  }

}
