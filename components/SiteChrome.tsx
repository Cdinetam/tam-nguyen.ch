"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { homeCopy, langOrder, type Lang } from "../lib/home-copy";

function currentLang(pathname: string): Lang {
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  if (pathname === "/fr" || pathname.startsWith("/fr/")) return "fr";
  return "de";
}

export function HtmlLang() {
  const pathname = usePathname();
  const lang = currentLang(pathname);

  useEffect(() => {
    document.documentElement.lang = homeCopy[lang].htmlLang;
  }, [lang]);

  return null;
}

export function SiteHeader() {
  const pathname = usePathname();
  const lang = currentLang(pathname);
  const copy = homeCopy[lang];

  return (
    <header className="header">
      <div className="container nav">
        <Link href={langOrder.find((item) => item.id === lang)?.route ?? "/"} className="brand">
          Tam Nguyen <span>Zürich</span>
        </Link>
        <div className="nav-right">
          <div className="links">
            <Link href="/kontakt">{copy.contact}</Link>
            <Link href="/impressum">{copy.impressum}</Link>
            <a href="https://www.linkedin.com/in/dung-tam-nguyen" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
          <nav className="lang" aria-label={copy.languagesLabel}>
            {langOrder.map((item, index) => (
              <span key={item.id}>
                {index > 0 ? <span className="sep">|</span> : null}
                <Link
                  href={item.route}
                  className={item.id === lang ? "active" : undefined}
                  aria-current={item.id === lang ? "page" : undefined}
                >
                  {item.code}
                </Link>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const pathname = usePathname();
  const lang = currentLang(pathname);
  const copy = homeCopy[lang];

  return (
    <footer className="footer">
      <div>© {new Date().getFullYear()} Tam Nguyen, Zürich</div>
      <div className="footer-lang">
        {copy.languagesLabel}
        {langOrder.map((item) => (
          <Link
            key={item.id}
            href={item.route}
            className={item.id === lang ? "active" : undefined}
            aria-current={item.id === lang ? "page" : undefined}
          >
            {item.code}
          </Link>
        ))}
      </div>
    </footer>
  );
}
