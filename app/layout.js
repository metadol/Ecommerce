import './globals.css'
import { Inter } from 'next/font/google'
import { ProductProvider } from './Context/context';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ecommerce',
  description: 'Ecommerce app for online shopping.',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <link rel="icon" href="/next.svg" sizes="any" />
      <body className={inter.className}>
        <ProductProvider>
          {children}
        </ProductProvider>
      </body>
    </html>
  )
}
