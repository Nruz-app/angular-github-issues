import { Component, inject, input } from '@angular/core';
import { GitHubIssue, State } from '../../interfaces/github-issue.interface';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IssueService } from '../../services/issue.service';

@Component({
  selector: 'issue-item',
  imports: [CommonModule,RouterLink],
  standalone: true,
  templateUrl: './issue-item.component.html',
  styleUrl: './issue-item.component.css'
})
export class IssueItemComponent {

  issue = input.required<GitHubIssue>();
  issueService = inject(IssueService);

  get isOpen() {
    return this.issue().state === State.Open;
  }

  prefetchData() {
    //this.issueService.prefetchIssue(this.issue().number.toString());
    this.issueService.seIssueData(this.issue());
  }

}
