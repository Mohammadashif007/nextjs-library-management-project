import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {  Edit, LucideDelete, Trash } from "lucide-react";
import React from "react";

export interface BookValue {
    title: string;
    author: string;
    isbn: string;
    category: string;
    copies: number;
    publicationYear: number;
}

const BookCard = ({ book }: { book: BookValue }) => {
    const { title, author, category, isbn, publicationYear, copies } = book;
    return (
        <Card className="w-80 shadow-md hover:shadow-xl transition rounded-2xl">
            <CardHeader>
                <CardTitle className="text-xl font-semibold">{title}</CardTitle>
                <p className="text-sm text-muted-foreground">{author}</p>
            </CardHeader>
            <CardContent className="space-y-2">
                <p>
                    <span className="font-medium">Category:</span> {category}
                </p>
                <p>
                    <span className="font-medium">ISBN:</span> {isbn}
                </p>
                <p>
                    <span className="font-medium">Published:</span>{" "}
                    {publicationYear}
                </p>
                <p>
                    <span className="font-medium">Copies:</span> {copies}
                </p>
            </CardContent>
            <CardFooter className="flex gap-3">
                {/* <Button>
                    <Edit></Edit>Edit
                </Button> */}
                <Button>
                   Details
                </Button>
            </CardFooter>
        </Card>
    );
};

export default BookCard;
