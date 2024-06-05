export default class FavouritesCards {
  constructor(favsList) {
    this.favsList = favsList;
  }

  async getFavs() {
    const ids = this.favsList.toString();
    
    if (ids) {
      const url = `https://jsproject.webcademy.ru/items?ids=${ids}`;
      const res = await fetch(url);
      const data = await res.json();
      this.cards = await data;
    }
  }
}
