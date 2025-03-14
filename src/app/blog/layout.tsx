import MainLayout from "../main/layout";

export default function BlogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div>
            <MainLayout>
                {children}
            </MainLayout>
        </div>
    );
}
