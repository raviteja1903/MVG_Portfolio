import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  // { label: 'Resume',       href: '#resume' },
  { label: "Contact", href: "#contact" },
];

const css = `
.navbar {
  position: fixed; top: 0; left: 0; right: 0;
  z-index: 500;
  padding: 18px 60px;
  display: flex; align-items: center; justify-content: space-between;
  transition: all 0.3s;
}
.navbar.scrolled {
  background: #05050af0;
  backdrop-filter: blur(24px);
  border-bottom: 1px solid #ffffff0f;
  padding: 12px 60px;
}
.nav-logo {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.5rem; font-weight: 500;
  color: #c9a84c; letter-spacing: 0.05em;
  text-decoration: none;
}
.nav-links-list {
  display: flex; gap: 0; list-style: none;
}
.nav-links-list a {
  font-size: 0.72rem; font-weight: 400;
  letter-spacing: 0.15em; text-transform: uppercase;
  color: #6e6c68; text-decoration: none;
  transition: color 0.2s;
  padding: 8px 14px; position: relative;
}
.nav-links-list a::after {
  content: ''; position: absolute;
  bottom: 0; left: 14px; right: 14px;
  height: 1px; background: #c9a84c;
  transform: scaleX(0); transition: transform 0.2s;
}
.nav-links-list a:hover,
.nav-links-list a.active { color: #c9a84c; }
.nav-links-list a:hover::after,
.nav-links-list a.active::after { transform: scaleX(1); }
.nav-resume-cta {
  padding: 8px 20px;
  border: 1px solid #c9a84c; color: #c9a84c;
  font-family: 'Outfit', sans-serif;
  font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase;
  background: transparent; cursor: none;
  transition: all 0.2s; text-decoration: none; margin-left: 16px;
}
.nav-resume-cta:hover { background: #c9a84c; color: #05050a; }

/* HAMBURGER */
.hamburger {
  display: none; flex-direction: column; gap: 5px;
  cursor: pointer; padding: 4px; background: none; border: none; z-index: 600;
}
.hamburger span {
  display: block; width: 24px; height: 1.5px;
  background: #c9a84c; transition: all 0.3s;
}
.hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

/* MOBILE MENU */
.mob-menu {
  display: none;
  position: fixed; inset: 0; z-index: 490;
  background: #05050af8;
  backdrop-filter: blur(24px);
  flex-direction: column; align-items: center; justify-content: center; gap: 24px;
  opacity: 0; pointer-events: none; transition: opacity 0.3s;
}
.mob-menu.open { opacity: 1; pointer-events: all; }
.mob-menu a {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 2rem; font-weight: 300;
  color: #b8b5af; text-decoration: none; letter-spacing: 0.05em;
  transition: color 0.2s;
}
.mob-menu a:active { color: #c9a84c; }
.mob-close-btn {
  margin-top: 12px; font-family: 'DM Mono', monospace;
  font-size: 0.65rem; letter-spacing: 0.2em; color: #6e6c68;
  text-transform: uppercase; background: none;
  border: 1px solid #ffffff1a; padding: 10px 24px; cursor: pointer;
}

@media (max-width: 768px) {
  .navbar { padding: 14px 20px; }
  .navbar.scrolled { padding: 12px 20px; }
  .nav-links-list, .nav-resume-cta { display: none; }
  .hamburger { display: flex; }
  .mob-menu { display: flex; }
}
`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = document.querySelectorAll("section[id]");
      let cur = "home";
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 100) cur = s.id;
      });
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };
  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  return (
    <>
      <style>{css}</style>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <a href="#home" className="nav-logo">
          MVG
        </a>
        <ul className="nav-links-list">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={active === l.href.slice(1) ? "active" : ""}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#resume" className="nav-resume-cta">
          View Resume
        </a>
        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mob-menu${menuOpen ? " open" : ""}`}>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={closeMenu}>
            {l.label}
          </a>
        ))}
        <button className="mob-close-btn" onClick={closeMenu}>
          ✕ Close
        </button>
      </div>
    </>
  );
}
