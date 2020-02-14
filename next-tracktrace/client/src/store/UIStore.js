import { decorate, observable, action, runInAction } from "mobx";
import Api from "../api/index";
import Card from "../models/Card";

class UIStore {
  cards = [];
  showModal = false;
  currentCard = new Card(this.rootStore);
  currentTheme = "";
  currentCode = "";
  currentFirstLocation = "";
  currentLocations = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`cards`);
    this.getCards();
    //this.findCard("4Hq8AC-W");
    //this.findCard("DzhM4d6W");
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
    console.log(this.cards);
  };

  findCard = cardId => {
    this.api.getCardById(cardId).then(card => {
      this.currentCard = card;
      this.currentTheme = card.theme;
      this.currentCode = card.uniqueId;
      this.currentFirstLocation = card.locationCreated;
      this.currentLocations = card.locations;
      return card;
    });
  };
  s;

  _addCard = values => {
    const card = new Card(this.rootStore);
    card.updateFromServer(values);
    runInAction(() => this.cards.push(card));
  };
}

decorate(UIStore, {
  showModal: observable,
  cards: observable,
  currentCard: observable,
  currentCode: observable,
  currentTheme: observable,
  currentFirstLocation: observable,
  currentLocations: observable,
  getCards: action,
  findCard: action
});

export default UIStore;
