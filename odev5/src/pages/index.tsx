import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Merhaba Next.js!</h1>
      <Link href="/about">Hakkımızda</Link>
    </div>
  );
}
