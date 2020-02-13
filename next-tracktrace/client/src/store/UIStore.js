import { decorate, observable, action, runInAction } from "mobx";
import Api from "../api/index";
import Card from "../models/Card";

class UIStore {
  cards = [];
  showModal = false;
  testId = "yiQbOdVI";
  testId2 = "5e443203e6e13c824cd0750b";
  currentCard = "yiQbOdVI";

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`cards`);
    this.getCards();
    this.findCard(this.testId);
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
    });
  };

  findCard = cardId => {
    console.log(cardId);
    // const card = this.cards.filter(obj => {
    //   return obj.uniqueId === this.cardId;
    // });
    // console.log("CARD", card);

    this.api.getCardById(cardId).then(card => {
      console.log("DIT IS DE GEVONDEN KAART: ", card);
    });
  };

  showCard = () => {
    const card = this.cards.filter(obj => {
      return obj.uniqueId === this.selectedCard;
    });

    console.log("IN SHOW CARD", card[0]);
    return card[0];
  };

  _addCard = values => {
    const card = new Card(this.rootStore);
    card.updateFromServer(values);
    runInAction(() => this.cards.push(card));
  };
}

decorate(UIStore, {
  showModal: observable,
  cards: observable,
  selectedCard: observable,
  getCards: action,
  findCard: action,
  showCard: action
});

export default UIStore;
