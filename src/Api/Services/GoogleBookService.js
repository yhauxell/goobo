export default class GoogleBookService {
  constructor() {
    this.url = "https://www.googleapis.com/books/v1/volumes?q=";
  }

  async getBooks(query) {
    const result = await fetch(`${this.url}${query}`).then(response => {
      return response.json();
    });
    return {books: result.items, total: result.totalItems};
  }
}
