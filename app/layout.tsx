import type { Metadata } from 'next'
import { Karla, Libre_Caslon_Display } from 'next/font/google'
import Script from 'next/script'

import WhatsAppCTA from '@/components/WhatsAppCTA'
import '../styles/globals.css'

/* -------------------------------------------------------------------------- */
/*                                   FONTS                                    */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/*                                  SEO DATA                                  */
/* -------------------------------------------------------------------------- */

const SITE_URL = 'https://www.internationaleducationschool.ma'

const TITLE =
  'École privée à Fès – Trilingue, Maternelle au Lycée | IES'

const DESCRIPTION =
  "IES est une école privée trilingue à Fès, de la maternelle au lycée, avec pédagogie Montessori en maternelle et enseignement en arabe, français et anglais."

/* -------------------------------------------------------------------------- */
/*                                  METADATA                                  */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: TITLE,
  description: DESCRIPTION,

  alternates: {
    canonical: `${SITE_URL}/`,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: `${SITE_URL}/`,
    siteName: 'IES — International Education School',
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: '/assets/logo-ies-full.webp',
        width: 1200,
        height: 630,
        alt: 'International Education School - IES Fès',
      },
    ],
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

/* -------------------------------------------------------------------------- */
/*                         SCHOOL STRUCTURED DATA                             */
/* -------------------------------------------------------------------------- */

const schoolStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'School',

  '@id': `${SITE_URL}/#school`,

  name: 'International Education School',
  alternateName: 'IES',

  url: SITE_URL,

  description: DESCRIPTION,

  logo: `${SITE_URL}/assets/logo-ies-full.webp`,
  image: `${SITE_URL}/assets/logo-ies-full.webp`,

  telephone: '+212666298815',
  email: 'inter.educationschool@gmail.com',

  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Fès',
    addressRegion: 'Fès-Meknès',
    addressCountry: 'MA',
  },

  areaServed: {
    '@type': 'City',
    name: 'Fès',
  },

  availableLanguage: [
    {
      '@type': 'Language',
      name: 'French',
      alternateName: 'fr',
    },
    {
      '@type': 'Language',
      name: 'Arabic',
      alternateName: 'ar',
    },
    {
      '@type': 'Language',
      name: 'English',
      alternateName: 'en',
    },
  ],

  sameAs: [
    'https://www.instagram.com/intereducationschool',
    'https://www.facebook.com/IESFES',
  ],
}

/* -------------------------------------------------------------------------- */
/*                              GOOGLE TAG MANAGER                            */
/* -------------------------------------------------------------------------- */

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

/* -------------------------------------------------------------------------- */
/*                                ROOT LAYOUT                                 */
/* -------------------------------------------------------------------------- */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className={`${karla.variable} ${libreCaslonDisplay.variable}`}
    >
      <body>
        {/* --------------------------------------------------------------- */}
        {/* School Schema.org structured data                               */}
        {/* --------------------------------------------------------------- */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schoolStructuredData).replace(
              /</g,
              '\\u003c'
            ),
          }}
        />

        {/* --------------------------------------------------------------- */}
        {/* Google Tag Manager                                              */}
        {/* --------------------------------------------------------------- */}

        {GTM_ID && (
          <>
            <Script id="gtm-script" strategy="afterInteractive">
              {`
                (function(w,d,s,l,i){
                  w[l]=w[l]||[];
                  w[l].push({
                    'gtm.start': new Date().getTime(),
                    event: 'gtm.js'
                  });

                  var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),
                      dl=l!='dataLayer'?'&l='+l:'';

                  j.async=true;
                  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;

                  f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `}
            </Script>

            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                style={{
                  display: 'none',
                  visibility: 'hidden',
                }}
              />
            </noscript>
          </>
        )}

        {/* --------------------------------------------------------------- */}
        {/* Application                                                     */}
        {/* --------------------------------------------------------------- */}

        {children}

        <WhatsAppCTA />
      </body>
    </html>
  )
}