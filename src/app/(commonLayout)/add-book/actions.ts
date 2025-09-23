"use server";

import { prisma } from "@/lib";


interface FormValues {
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
        console.log(book);
        return { success: true, book };
    } catch (error) {
        console.error("❌ Error creating book", error);
        return { success: false, error: "Failed to create book" };
    }
};
