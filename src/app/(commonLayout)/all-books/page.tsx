import React from "react";
import { getAllBooks } from "../add-book/actions";
import BookCard from "./bookCard";

const AllBooksPage = async () => {
    const books = await getAllBooks();
    if(!books?.data) return <p>No book data found</p>
    return (
        <div className="grid md:grid-cols-3 gap-3 container mx-auto">
            {books?.data.map((book) => (
                <BookCard book={book} key={book.id}></BookCard>
            ))}
        </div>
    );
};

export default AllBooksPage;
