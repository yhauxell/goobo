export default class GoogleBookService {
    constructor() {
        this.url = "https://www.googleapis.com/books/v1/volumes?q=";
    }

    async getBooks(query, from) {
        const params = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            mode: "cors"
        };
        const result = await fetch(
            `${this.url}${query}&maxResults=40&orderBy=newest&startIndex=0`, params
        ).then(response => {
            return response.json();
        });

        let books = {};
        let ids = new Set();
        let filters = new Set();
        for (let index = 0; index < result.items.length; index++) {
            const book = result.items[index];
            const id = book.id;
            ids.add(id);
            const simpleBook = this.createSimpleBook(book);
            if (simpleBook.year) {
                filters.add(simpleBook.year);
            }
            books[id] = simpleBook;
        }
        ids = Array.from(ids);
        return {
            ids,
            books,
            size: ids.length,
            total: result.totalItems, //Free api never reach rest of books, Not used yet!
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
                imageLinks,
                previewLink
            }
        } = book;

        let thumbnail = imageLinks ? imageLinks.smallThumbnail : null;

        return {
            id,
            title,
            subtitle,
            authors,
            description,
            year: publishedDate && publishedDate.split("-")[0],
            rating,
            thumbnail,
            previewLink
        };
    }
}
