import Link from "next/link";
import Dashboard from '@/components/Dashboard';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem' }}>
    <h1> Marketing </h1>
    <p> MARKETING MEGA SZPONT!!!!</p>
    <Link href="../"> Powrót </Link>
    </main> 
  );
}

