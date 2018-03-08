import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

export const getMarkovModel = (): number[][] => {
  const model: number[][] = [];
  model.push([0, 0.8, 0.2, 0, 0, 0]);
  model.push([0, 0, 0.3, 0, 0, 0.7]);
  model.push([0, 0, 0, 0, 0, 1]);
  model.push([0, 0, 0, 1, 0, 0]);
  model.push([0.1, 0.9, 0, 0, 0, 0]);
  model.push([0, 0, 0, 0.5, 0, 0.5]);

  return model;
};

export const getIndexForModuleName = (moduleName: string): number => {
  switch (moduleName) {
    case 'module-a': {
      return 0;
    }
    case 'module-b': {
      return 1;
    }
    case 'module-c': {
      return 2;
    }
    case 'module-d': {
      return 3;
    }
    case 'module-e': {
      return 4;
    }
    case 'module-f': {
      return 5;
    }
  }
};

export const getModuleNameForIndex = (index: number): string => {
  switch (index) {
    case 0: {
      return 'module-a';
    }
    case 1: {
      return 'module-b';
    }
    case 2: {
      return 'module-c';
    }
    case 3: {
      return 'module-d';
    }
    case 4: {
      return 'module-e';
    }
    case 5: {
      return 'module-f';
    }
  }
};

export const getIndexOfMaxValue = (modules: number[]): number =>  {
  let maxIndex = 0;

  for(let i = 0; i < modules.length; i++) {
    if (modules[maxIndex] < modules[i]) {
      maxIndex = i;
    }
  }
  return maxIndex;
};


@Injectable()
export class MarkovModelService {
  markovModel: number[][] = getMarkovModel();
  nextState$: BehaviorSubject<string> = new BehaviorSubject('module-a');

  getNextModule(currentModuleName: string): string {
    const currentIndex = getIndexForModuleName(currentModuleName);
    const modules = this.markovModel[currentIndex];
    const maxIndex = getIndexOfMaxValue(modules);
    return getModuleNameForIndex(maxIndex);
  }

  updateCurrentModule(currentModuleName: string) {
    this.nextState$.next(this.getNextModule(currentModuleName));
  }
}
