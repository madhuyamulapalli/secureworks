import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { RepoSearchComponent } from "../../repos/repos-search/repos-search.component";
import { ReposListComponent } from "../../repos/repos-list/repos-list.component";
import { ReposStore } from '../../../store/repos.store';
import { RepositoryData } from '../../repos/repos.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RepoSearchComponent, ReposListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [ReposStore],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  reposStore = inject(ReposStore);

  receiveData(data: RepositoryData) {
    // update the state with repos data
    this.reposStore.addRepos(data.repositoryOwner.repositories.nodes)
  }

}
