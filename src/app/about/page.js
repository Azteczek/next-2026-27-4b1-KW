import Link from "next/link";
import Card from '@/components/Card';

export default function AboutPage() {
    return (
        <main style={{ padding: '2rem' }}>
            <h1> O nas </h1>
            <Card title = "Nasza misja">

                <p> Dowiedz się więcej o nasdzej szkolnej inicjatywie! </p>
            </Card>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Card title="Punkt 1">Treść 1</Card>
            <Card title="Punkt 2">Treść 2</Card>
            </div>

            <Link href="../"> Powrót </Link>
        </main>
    );
}