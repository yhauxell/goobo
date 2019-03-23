export default class GoogleBookService {
  constructor() {
    this.url = "https://www.googleapis.com/books/v1/volumes?q=";
  }

  async getBooks(query) {
    const result = await fetch(`${this.url}${query}`).then(response => {
      return response.json();
    });

    let books = {};
    let ids = [];
    let filters = new Set();
    for (let index = 0; index < result.items.length; index++) {
      const book = result.items[index];
      const id = book.id;
      ids.push(id);
      const simpleBook = this.createSimpleBook(book);
      filters.add(simpleBook.year);
      books[id] = simpleBook;
    }
    return {
      ids,
      books,
      size: ids.length,
      total: result.totalItems,
      filters: Array.from(filters).sort(),
      current: books[ids[0]]
    };
  }
  createSimpleBook(book) {
    const {
      id,
      volumeInfo: {
        title,
        subtitle,
        authors,
        description,
        publishedDate,
        averageRating: rating,
        imageLinks: { smallThumbnail: thumbnail }
      }
    } = book;
    return {
      id,
      title,
      subtitle,
      authors,
      description,
      year: publishedDate.split("-")[0],
      rating,
      thumbnail
    };
  }
}
