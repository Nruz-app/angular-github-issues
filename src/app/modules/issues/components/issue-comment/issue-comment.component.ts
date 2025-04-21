import { Component, input } from '@angular/core';
import { GitHubIssue } from '../../interfaces/github-issue.interface';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'issue-comment',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './issue-comment.component.html',
  styleUrl: './issue-comment.component.css'
})
export class IssueCommentComponent {

  issue = input.required<GitHubIssue>();

}
