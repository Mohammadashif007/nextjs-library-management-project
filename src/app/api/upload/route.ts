/* eslint-disable @typescript-eslint/no-explicit-any */
import ImageKit from "imagekit";
import { NextResponse } from "next/server";

const imageKit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY!,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT!,
});

export const POST = async (req: Request) => {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File | null;
        if (!file) {
            return NextResponse.json(
                { error: "No file provided" },
                { status: 400 }
            );
        }
        //! Convert browser File -> base64 (ImageKit Node SDK accepts base64)
        const arrayBuffer = await file.arrayBuffer();
        const base64 = Buffer.from(arrayBuffer).toString("base64");

        //! Upload to ImageKit (wrap callback API in a Promise)
        const uploadResult = await new Promise<any>((resolve, reject) => {
            imageKit.upload(
                {
                    file: base64,
                    fileName: file.name,
                    folder: "books",
                },
                (err, result) => {
                    if (err) return reject(err);
                    resolve(result);
                }
            );
        });
        return NextResponse.json({ success: true, ...uploadResult });
    } catch (error) {
        console.error("Image upload failed:", error);
        return NextResponse.json(
            { error: "Upload failed", details: String(error) },
            { status: 500 }
        );
    }
};
