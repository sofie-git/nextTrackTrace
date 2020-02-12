import { decorate, observable, action, runInAction } from "mobx";
import Api from "../api/index";
import Card from "../models/Card";

class UIStore {
  cards = [];
  showModal = false;
  selectedCard = "LPcVmOdZ9";

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`cards`);
    this.getCards();
  }

  handleToggleModal = () => {
    this.showModal ? (this.showModal = false) : (this.showModal = true);
  };

  /// CARDS //////////////////

  getCards = () => {
    this.api.getAllCards().then(newCards => {
      if (newCards.length > 0) {
        newCards.forEach(newCard => this._addCard(newCard));
      }
      console.log("Dit is newCards:");
      console.log(newCards);
    });
  };

  _addCard = values => {
    const card = new Card(this.rootStore);
    card.updateFromServer(values);
    runInAction(() => this.cards.push(card));
  };

  showCard = () => {
    const card = this.cards.filter(obj => {
      return obj.uniqueId === this.selectedCard;
    });

    return card[0];
  };
}

decorate(UIStore, {
  showModal: observable,
  cards: observable,
  selectedCard: observable,
  getCards: action,
  showCard: action
});

export default UIStore;
