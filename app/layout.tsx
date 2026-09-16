import './globals.css'

export const metadata = {
  title: 'École privée trilingue à Fès | IES',
  description:
    "IES est une école privée trilingue à Fès, de la maternelle au lycée, avec pédagogie Montessori en maternelle et enseignement en arabe, français et anglais.",
  alternates: { canonical: 'https://internationaleducationschool.com/' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
