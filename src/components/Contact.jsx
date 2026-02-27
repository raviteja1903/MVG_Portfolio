import { Reveal } from './useReveal';
import { DATA } from '../data';

const css = `
.contact-inner {
  max-width: 680px; margin: 0 auto; text-align: center;
}
.contact-heading {
  font-family: var(--fd);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 300; line-height: 1.1; margin-bottom: 16px;
}
.contact-heading em { color: var(--gold); font-style: italic; }
.contact-sub {
  color: var(--w3); font-size: 0.88rem; margin-bottom: 44px;
  max-width: 380px; margin-left: auto; margin-right: auto;
}
.contact-links {
  display: flex; flex-wrap: wrap; gap: 14px;
  justify-content: center; margin-bottom: 40px;
}
.c-link {
  display: flex; align-items: center; gap: 10px;
  padding: 14px 22px;
  border: 1px solid var(--bdr);
  background: var(--surf);
  color: var(--w2); text-decoration: none;
  font-size: 0.82rem; transition: all 0.2s;
}
.c-link:hover { border-color: var(--goldd); color: var(--gold); }
.c-link svg { flex-shrink: 0; }

@media (max-width: 768px) {
  .contact-links { flex-direction: column; align-items: stretch; }
  .c-link { justify-content: center; }
}
`;

const IconMail = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);
const IconPhone = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.58 4.38 2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.4a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const IconLinkedIn = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Contact() {
  return (
    <>
      <style>{css}</style>
      <section id="contact">
        <div className="contact-inner">
          <Reveal>
            <h2 className="contact-heading">Let's <em>Connect</em></h2>
            <p className="contact-sub">
              Open to opportunities in Drug Safety, Pharmacovigilance, and ICSR Processing roles.
            </p>
            <div className="contact-links">
              <a className="c-link" href={`mailto:${DATA.email}`}>
                <IconMail /> {DATA.email}
              </a>
              <a className="c-link" href={DATA.phoneHref}>
                <IconPhone /> {DATA.phone}
              </a>
              <a className="c-link" href={DATA.linkedin} target="_blank" rel="noreferrer">
                <IconLinkedIn /> LinkedIn Profile
              </a>
            </div>
            <a className="btn-gold" href={`mailto:${DATA.email}`}>Send a Message</a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
