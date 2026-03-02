import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://tam-nguyen.ch"),
  title: "Tam Nguyen, Zürich – Fractional CHRO & Executive Advisor",
  description:
    "Tam Nguyen ist ein in Zürich ansässiger Fractional Chief Human Resources Officer (CHRO) und Executive Advisor. Begleitung von Geschäftsleitungen und Verwaltungsräten in People-, Organisations- und Transformationsfragen.",
  openGraph: {
    title: "Tam Nguyen – Fractional CHRO & Executive Advisor",
    description: "Executive Advisory für GL und Verwaltungsräte. Zürich.",
    url: "https://tam-nguyen.ch",
    locale: "de_CH",
    type: "website",
  },
  alternates: {
    canonical: "https://tam-nguyen.ch",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de-CH">
      <body>
        <header className="header">
          <div className="container nav">
            <Link href="/" className="brand">
              Tam Nguyen <span>Zürich</span>
            </Link>
            <div className="links">
              <Link href="/kontakt">Kontakt</Link>
              <Link href="/impressum">Impressum</Link>
            </div>
          </div>
        </header>

        <main className="container content">{children}</main>

        <footer className="footer">
          © {new Date().getFullYear()} Tam Nguyen · Zürich
        </footer>
      </body>
    </html>
  );
}
