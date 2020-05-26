import HomeStore from './HomeStore';

class RootStore {
  public homeStore: HomeStore;

  constructor() {
    this.homeStore = new HomeStore();
  }
}

const store: RootStore = new RootStore();

export { RootStore };

export default store;
