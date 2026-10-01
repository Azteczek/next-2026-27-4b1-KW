import Link from "next/link";

export default function AboutPage() {
    return (
        <main style={{ padding: '2rem' }}>
            <h1> O nas </h1>
            <p> Dowiedz się więcej o nasdzej szkolnej inicjatywie! </p>
            <Link href="../"> Powrót </Link>
        </main>
    );
}