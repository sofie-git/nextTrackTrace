import { decorate, observable, action } from "mobx";

class UIStore {
  showModal = false;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  handleToggleModal = () => {
    this.showModal ? (this.showModal = false) : (this.showModal = true);
  };

  // show confirmation pop-up
}

decorate(UIStore, {
  showModal: observable
});

export default UIStore;
