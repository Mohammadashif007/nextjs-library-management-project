"use server";

import { prisma } from "@/lib";

export interface FormValues {
    title: string;
    author: string;
    isbn: string;
    category: string;
    copies: number;
    publication_year: number;
}

export const createBook = async (data: FormValues) => {
    try {
        const book = await prisma.books.create({
            data: {
                title: data.title,
                author: data.author,
                category: data.category,
                isbn: data.isbn,
                copies: data.copies,
                publicationYear: data.publication_year,
            },
        });
        return { success: true, book };
    } catch (error) {
        console.error("❌ Error creating book", error);
        return { success: false, error: "Failed to create book" };
    }
};

export const getAllBooks = async () => {
    try {
        const books = await prisma.books.findMany({});
        console.log("From books server", books);
        return { success: true, data: books };
    } catch (error) {
        console.error("❌ Error retrieve book", error);
        return { success: false, error: "Failed to retrieve book" };
    }
};
