import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { SearchDialog } from '@/components/SearchDialog'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>AI 法律助手 - Bcloud.Store</title>
        <meta
          name="description"
          content="AI 法律助手 - Bcloud.Store"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-6GCGYXNM3S"
      strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-6GCGYXNM3S');
        `}
      </Script>
      <main className={styles.main}>
       
        <h1 className='text-slate-700 font-bold text-2xl mb-12 flex items-center gap-3 dark:text-slate-400'><Image src={'/logo.png'} width="32" height="32" alt="MagickPen logo" /> AI 法律助手</h1>
        <p></p>
           <Image src={'/Bcloud-logo.png'} width="300" height="60" alt="Bcloud logo" />
          <p></p>
        <div className={styles.center}>
          <SearchDialog />
        </div>

        
<p></p><p></p><p></p><p></p><p></p><p></p>
        <div className="py-10 w-full md:flex items-center justify-center md:space-x-6">
          <div className="flex items-center justify-center space-x-6 mt-4 md:m-0">
            <div className="opacity-75 transition hover:opacity-100 cursor-pointer">
              <Link
                href="#"
                className="flex items-center justify-center"
              >
                <Image src={'/github.svg'} width="24" height="24" alt="Github logo" />
              </Link>
            </div>
            <div className="opacity-75 transition hover:opacity-100 cursor-pointer">
              <Link
                href="#"
                className="flex items-center justify-center"
              >
                <Image src={'/twitter.svg'} width="24" height="24" alt="Twitter logo" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
