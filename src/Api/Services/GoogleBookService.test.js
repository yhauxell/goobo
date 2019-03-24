import GoogleBookService from "./GoogleBookService";

describe("GoogleBookService test suite", () => {
    let service;
    beforeEach(() => {
        window.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                json: () => {
                    return {
                        items: [
                            {
                                id: "VYbJCgAAQBAJ",
                                volumeInfo: {
                                    title: "Backbone JS",
                                    subtitle: "JavaScript Framework",
                                    authors: ["Guillermo Lorenzo Carvallo"],
                                    publishedDate: "2015-04-16",
                                    description:
                                        "Backbone es un Framework más popular de JavaScript que le permiten crear MVC (modelo-vista-controlador) como aplicaciones y aplicaciones de una sola página. Los principales componentes de Backbone.js son el Modelo, Vista, Colección, Router y los objetos de la clase Event. En Backbone, un modelo almacena los datos que se recuperan desde el servidor mediante RESTful JSON y se asocia con la vista. La vista renderiza el HTML mediante el uso de plantillas JavaScript o renderizando el framework y gestionando los eventos desencadenados en los elementos del mismo. El router es como como controlador y es el responsable de manejar una determinada URL y diciéndole al framework que código debe ejecutarse para esa URL. Los eventos es un módulo que se puede mezclar con cualquier objeto para enlazar y disparar eventos con nombre personalizado.",

                                    imageLinks: {
                                        smallThumbnail:
                                            "http://books.google.com/books/content?id=VYbJCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
                                    },
                                    previewLink:
                                        "http://books.google.cl/books?id=VYbJCgAAQBAJ&pg=PA30&dq=js&hl=&cd=1&source=gbs_api"
                                }
                            }
                        ]
                    };
                }
            })
        );
        service = new GoogleBookService();
    });
    
    it("should return Promise when call getBooks", async () => {
        const booksState = await service.getBooks("js");
        expect(booksState.ids.length).toBe(1);
        const book = booksState.books["VYbJCgAAQBAJ"];
        expect(book.id).toBe('VYbJCgAAQBAJ');
        expect(book.title).toBe('Backbone JS');
        expect(Array.isArray(book.authors)).toBe(true);
        expect(book.year).toBe('2015');
        expect(book.rating).toBe(undefined);
    });
});
