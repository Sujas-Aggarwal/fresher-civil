import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: "Civil Fresher Party",
    description: "Civil Engineering Fresher Party",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <main >
                    <Navbar />
                    {children}
                </main>
            </body>
        </html>
    );
}
