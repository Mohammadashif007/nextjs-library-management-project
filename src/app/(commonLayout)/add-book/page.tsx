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
import React from "react";
import { useForm } from "react-hook-form";

const AddBook = () => {
    const form = useForm();
    return (
        <div className="container mx-auto">
            <div className="flex flex-col justify-center items-center text-center border rounded-2xl px-3 py-6">
                <h1 className="text-3xl font-semibold">📚 Add Book</h1>
                <Form {...form}>
                    <form className="flex flex-col gap-5 w-1/2">
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
                        <Button>Create</Button>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default AddBook;
