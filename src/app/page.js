import Link from "next/link";
import Dashboard from '@/components/Dashboard';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem' }}>
    <h1> Witaj na naszej stronie głównej </h1>
    <p> To jest pierwsza strona stworzona w Next.js z App Routerem. </p>
    <Link href="/about"> Przejdz do strony o nas.</Link>
    <br />
    <Link href="/landing"> Przejdz do strony marketingowej </Link>
    <Dashboard />
    </main> 
  );
}

