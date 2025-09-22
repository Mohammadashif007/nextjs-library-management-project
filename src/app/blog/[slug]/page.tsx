import React from "react";

const BlogDetailPage = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const { slug } = await params;
    return (
        <div>
            <h1>this is Blog details: {slug}</h1>
        </div>
    );
};

export default BlogDetailPage;
