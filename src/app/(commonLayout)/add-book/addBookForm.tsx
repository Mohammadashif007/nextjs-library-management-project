/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createBook } from "./actions";

export interface AddBookFormValues {
    title: string;
    author: string;
    category: string;
    isbn: string;
    publication_year: number;
    copies: number;
    images?: string[];
}

const AddBook = () => {
    const form = useForm<AddBookFormValues>({
        defaultValues: {
            title: "",
            author: "",
            category: "",
            isbn: "",
            publication_year: 0,
            copies: 0,

            // images: undefined as unknown as FileList,
        },
    });
    const [files, setFiles] = useState<FileList | null>(null);
    const onSubmit = async (value: AddBookFormValues) => {
        const parsedValue = {
            ...value,
            publication_year: Number(value.publication_year),
            copies: Number(value.copies),
        };

        //! Upload images first and collect URLs
        const imageUrls: string[] = [];
        if (files && files.length > 0) {
            for (const f of Array.from(files)) {
                const fd = new FormData();
                fd.append("file", f);
                const res = await fetch("/api/upload", {
                    method: "POST",
                    body: fd,
                });
                const data = await res.json();
                if (!res.ok) {
                    throw new Error(data?.error || "Image upload failed");
                }
                imageUrls.push(data.url);
            }
            //! attach URLs to the payload and call your action
            const payload: any = { ...parsedValue, images: imageUrls };
            const res = await createBook(payload);
            console.log("✅ Book created", res);
        }
        const res = await createBook(parsedValue);
        console.log("✅ Book created", res);
    };
    return (
        <div className="container mx-auto">
            <div className="flex flex-col justify-center items-center text-center border rounded-2xl px-3 py-6">
                <h1 className="text-3xl font-semibold">📚 Add Book</h1>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="flex flex-col gap-5 w-1/2"
                    >
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Title" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="author"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Author</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Author"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Category</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Category"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="isbn"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>ISBN NO.</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="ISBN NO."
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="publication_year"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Publication Year</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Publication Year"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="copies"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Copies Available</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Copies Available"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        {/* <FormField
                            control={form.control}
                            name="images"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Book Image</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="file"
                                            multiple
                                            onChange={(e) =>
                                                field.onChange(e.target.files)
                                            }
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        /> */}
                        <div>
                            <label className="block text-sm font-medium">
                                Book images
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={(e) => setFiles(e.target.files)}
                                className="mt-1"
                            />
                        </div>
                        <Button>Create</Button>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default AddBook;
