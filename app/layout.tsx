import { Footer, NavBar } from '@/components'
import './globals.css'

export const metadata = {
    title: 'Car hub',
    description: "Discover world's best car showcase application",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body className="relative">
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
