import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';
import { IssueService } from '../../services/issue.service';
import { IssueCommentComponent } from '../../components/issue-comment/issue-comment.component';


@Component({
  selector: 'app-issue',
  standalone: true,
  imports: [CommonModule,RouterLink,IssueCommentComponent],
  templateUrl: './issue.component.html',
  styleUrl: './issue.component.css'
})
export default class IssueComponent {

  route = inject(ActivatedRoute);
  issueService = inject(IssueService);

  issueNumber = toSignal<string>(
    this.route.paramMap.pipe(
      map((params) => params.get('number') ?? ''),
      tap((issueNumber) => this.issueService.setIssueNumber(issueNumber))
    )
  )

  issueQuery = this.issueService.issueQuery;
  issueCommentsQuery = this.issueService.issueCommentsQuery;

}


