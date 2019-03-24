import React from "react";
import TestRenderer from "react-test-renderer";
import MainPage from "./MainPage";

describe("MainPage component", () => {
    it("should render children", () => {
        const testRenderer = TestRenderer.create(<MainPage />);
        const container = testRenderer.toJSON();
        expect(container.children.length).toBe(2);
    });

    it("should set state error when call getBook without term", () => {
        const testRenderer = TestRenderer.create(<MainPage />);
        const root = testRenderer.root;
        const instance = root.instance;
        instance.getBooks();
        testRenderer.update();
        expect(instance.state.error == null).toBe(false);
    });

    it("should set state current to given id owner", () => {
        const testRenderer = TestRenderer.create(<MainPage />);
        const root = testRenderer.root;
        const instance = root.instance;

        instance.state.books = {
            VYbJCgAAQBAJ: {
                id: "VYbJCgAAQBAJ",
                title: "Backbone JS",
                subtitle: "JavaScript Framework",
                authors: ['Rick'],
                description:
                    "Backbone es un Framework más popular de JavaScript",
                year: "2015",
                rating: 3,
                thumbnail:
                    "http://books.google.com/books/content?id=VYbJCgAAQBAJ&p",
                previewLink:
                    "http://books.google.cl/books?id=VYbJCgAAQBAJ&pg"
            }
        };

        instance.changeCurrent('VYbJCgAAQBAJ');
        testRenderer.update();

        expect(instance.state.current.id).toBe('VYbJCgAAQBAJ');
        expect(instance.state.current.title).toBe('Backbone JS');
    });
});
