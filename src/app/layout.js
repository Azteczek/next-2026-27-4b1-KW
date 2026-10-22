import "./globals.css"
import { CounterProvider } from "@/components/CounterContext";

export default function RootLayout({ children }) {
  return (
    <html>  
      <body>
        <header style={{ background: '#f0f0f0', padding: '1rem'}}>
          <nav>
            <strong> Moja Aplikacja Szkolna</strong>
            <span className="highlight">Ważna informacja</span>
          </nav>
        </header>
        <CounterProvider>
          {children}
        </CounterProvider>
        
      </body>
    </html>
  );
}