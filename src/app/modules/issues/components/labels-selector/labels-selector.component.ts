import { Component, inject, input } from '@angular/core';
import { GitHubLabel } from '../../interfaces/github-label.interface';
import { CommonModule } from '@angular/common';
import { IssuesService } from '../../services/issues.service';

@Component({
  selector: 'labels-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labels-selector.component.html',
  styleUrl: './labels-selector.component.css'
})
export class LabelsSelectorComponent {

  labels = input.required<GitHubLabel[]>();
  IssuesService = inject(IssuesService);


  isSelected(labelName : string) : boolean {
    return this.IssuesService.selectedLabels().has(labelName);
  }

  onToggleLabel(labelName : string) {

    this.IssuesService.toggleLabel(labelName);

  }

}
