export default function RootLayout({ children }) {
  return (
    <html>  
      <body>
        <header style={{ background: '#f0f0f0', padding: '1rem'}}>
          <nav>
            <strong> Moja Aplikacja Szkolna</strong>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}