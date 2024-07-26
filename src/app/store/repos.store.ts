import { computed, effect } from '@angular/core';
import {
    patchState,
    signalStore,
    withComputed,
    withMethods,
    withState,
    withHooks,
    getState,
} from '@ngrx/signals';
import { RepoNode } from '../pages/repos/repos.model';

type ReposState = {
    repos: RepoNode[];
    isLoading: boolean;
    filter: { query: string; order: 'asc' | 'desc' };
};

const initialState: ReposState = {
    repos: [],
    isLoading: false,
    filter: { query: '', order: 'asc' },
};

export const ReposStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withComputed(({ repos }) => ({
        repoCount: computed(() => repos().length),
    })),
    withMethods((store) => ({
        addRepos(repos: RepoNode[]) {
            patchState(store, { repos });
        },
    })),
    withHooks({
      onInit(store) {
        effect(() => {
          // 👇 The effect is re-executed on state change.
          const state = getState(store);
          console.log(' state changed', state);
        });
      },
      onDestroy(store) {
        console.log('count on destroy', store.repoCount());
      },
    })
);