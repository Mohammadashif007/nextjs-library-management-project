import Footer from "@/components/commonComponent/footer";
import Navbar from "@/components/commonComponent/navbar";
import React, { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-dvh">{children}</div>
            <Footer></Footer>
        </div>
    );
};

export default CommonLayout;
