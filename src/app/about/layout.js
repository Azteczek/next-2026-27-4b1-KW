export default function RootLayout({ children }) {
  return (
      <body>
        <header style={{ background: '#4f4848', padding: '1rem'}}>
          <nav>
            <strong> About </strong>
          </nav>
        </header>
        {children}
      </body>
  );
}