import UIStore from "./UIStore";

class Store {
  constructor() {
    this.uiStore = new UIStore(this);
  }
}

export default new Store();
