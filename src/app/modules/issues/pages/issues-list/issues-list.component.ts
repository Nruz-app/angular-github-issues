import { Component, inject } from '@angular/core';
import { IssuesService } from '../../services/issues.service';
import { LabelsSelectorComponent } from '../../components/labels-selector/labels-selector.component';
import { IssueItemComponent } from '../../components/issue-item/issue-item.component';
import { State } from '../../interfaces/github-issue.interface';

@Component({
  selector: 'app-issues-list',
  standalone: true,
  imports: [LabelsSelectorComponent,IssueItemComponent],
  templateUrl: './issues-list.component.html',
  styleUrl: './issues-list.component.css'
})
export default class IssuesListComponent {

  issuesService = inject(IssuesService);

  get labelsQuery() {
    return this.issuesService.labelQuery;
  }

  get issuesQuery() {
    return this.issuesService.issuesQuery;
  }

  onChangeState(newState: string) {

    const state = {
      all : State.All,
      open : State.Open,
      closed : State.Closed
    }[newState] ?? State.All;

    this.issuesService.showIssuesByState(state);

  }

}
