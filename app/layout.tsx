import { Luckiest_Guy, Nunito_Sans, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { cn } from "@/lib/utils"

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const luckiestGuy = Luckiest_Guy({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata = {
  title: "T.I.M.E Camp 2027 | This Is My Era",
  description: "Annual Youth Camp for Chrisco Fellowship of Churches Uganda",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        nunitoSans.variable,
        luckiestGuy.variable,
        fontMono.variable,
        "font-sans"
      )}
    >
      <body className="relative flex min-h-dvh flex-col justify-between overflow-x-hidden bg-neutral-950 p-6 font-sans text-neutral-200 selection:bg-primary selection:text-white sm:p-6 md:p-8 lg:p-12">
        <ThemeProvider>
          <Header />
          <main className="relative z-10 flex flex-1 flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
