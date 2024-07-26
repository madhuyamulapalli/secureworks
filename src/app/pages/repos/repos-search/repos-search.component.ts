import { Component, inject, Output, EventEmitter } from '@angular/core';
import { ReposService } from '../repos.service';
import { ReposStore } from '../../../store/repos.store';
import { RepositoryData } from '../repos.model';
import { CommonModule } from "@angular/common";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'sw-repo-search',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, FormsModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './repos-search.component.html',
  styleUrl: './repos-search.component.css',
  providers: [ReposStore],
})
export class RepoSearchComponent {
  repoService = inject(ReposService)
  store = inject(ReposStore);
  userFormControl = new FormControl('', [Validators.required]);
  @Output() dataToSend = new EventEmitter<any>();

  getRepoList() {
    const name = this.userFormControl.getRawValue() || '';

    /**
     * The below graphql call is  commented as the token has problem to access from githib graph api.
     * for running the project , data is loaded from repo.json
     */

    // this.repoService.getGraphqlRepos(name).subscribe((data: RepositoryData) => {
    //   this.dataToSend.emit(data);
    // });

    this.repoService.getReposData(name).subscribe((data: RepositoryData) => {
      this.dataToSend.emit(data);
    });
  }

}
