import Head from 'next/head';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pt-2 min-h-screen bg-black flex items-center justify-center">
        <div className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          {children}
        </div>
      </div>
    </>
  );
}
