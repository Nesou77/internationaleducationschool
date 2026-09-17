import { Karla, Libre_Caslon_Display } from 'next/font/google'
import '../styles/globals.css'

const karla = Karla({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-karla',
  display: 'swap',
})

const libreCaslonDisplay = Libre_Caslon_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-libre-caslon',
  display: 'swap',
})

export const metadata = {
  title: 'École privée trilingue à Fès | IES',
  description:
    "IES est une école privée trilingue à Fès, de la maternelle au lycée, avec pédagogie Montessori en maternelle et enseignement en arabe, français et anglais.",
  alternates: { canonical: 'https://internationaleducationschool.com/' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${karla.variable} ${libreCaslonDisplay.variable}`}>
      <body>{children}</body>
    </html>
  )
}
