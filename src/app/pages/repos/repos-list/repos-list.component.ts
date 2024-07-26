import { Component, ChangeDetectionStrategy, Input, SimpleChanges } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { RepoNode } from '../repos.model';

@Component({
  selector: 'sw-repos-list',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './repos-list.component.html',
  styleUrl: './repos-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReposListComponent {
  @Input({ required: true }) repos: RepoNode[] = [];
  columnDefs: ColDef[] = [
    { headerName: 'Repository Name', field: 'name', width: 250 },
    { headerName: 'Forks', field: 'forks', width: 100 },
    { headerName: 'Created', field: 'created_at', width: 250  },
    { headerName: 'Stars', field: 'stars', width: 100  },
    { headerName: 'Repo URL', field: 'repo_url', width: 400  },
  ]
  rowData = []

  ngOnChanges(changes: SimpleChanges): void {
    this.rowData = changes["repos"].currentValue;
  }

}

