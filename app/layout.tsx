import { Karla, Libre_Caslon_Display } from 'next/font/google'
import Script from 'next/script'
import WhatsAppCTA from '@/components/WhatsAppCTA'
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

const SITE_URL = 'https://internationaleducationschool.com'
const TITLE = 'École privée trilingue à Fès | IES'
const DESCRIPTION =
  "IES est une école privée trilingue à Fès, de la maternelle au lycée, avec pédagogie Montessori en maternelle et enseignement en arabe, français et anglais."

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/` },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: `${SITE_URL}/`,
    siteName: 'IES — International Education School',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/assets/logo-ies-full.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/assets/logo-ies-full.webp'],
  },
  icons: {
    icon: '/assets/logo-ies.webp',
    apple: '/assets/logo-ies.webp',
  },
}

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${karla.variable} ${libreCaslonDisplay.variable}`}>
      <body>
        {GTM_ID && (
          <>
            <Script id="gtm-script" strategy="afterInteractive">
              {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `}
            </Script>
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
              />
            </noscript>
          </>
        )}
        {children}
        <WhatsAppCTA />
      </body>
    </html>
  )
}
