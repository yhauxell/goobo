export default class GoogleBookService {
    constructor() {
        this.url = "https://www.googleapis.com/books/v1/volumes?q=";
    }

    async getBooks(query, from=0, size=40) {
        const params = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            mode: "cors"
        };
        const result = await fetch(
            `${this.url}${query}&maxResults=${size}&orderBy=newest&startIndex=${from}`, params
        ).then(response => {
            return response.json();
        });

        if(!result.items || result.items.length === 0){
            throw new Error("No books found, try with another search term.");
        }

        let books = {};
        let ids = [];
        let filters = new Set();
        for (let index = 0; index < result.items.length; index++) {
            const book = result.items[index];
            let id = book.id;
            
            if(ids.includes(id)){//Fix duplicated ids problem.
                const rnum = Math.floor(Math.random() * 1000).toString(16);
                id = id + rnum;
                book.id = id;
            }
            ids.push(id);
            
            const simpleBook = this.createSimpleBook(book);
            if (simpleBook.year) {
                filters.add(simpleBook.year);
            }
            books[id] = simpleBook;
        }
        //ids = Array.from(ids);
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
