import { Reveal } from './useReveal';
import { DATA } from '../data';

const css = `
.about-wrap {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 80px; align-items: start;
}
.about-text p {
  color: var(--w2); font-size: 0.93rem;
  line-height: 1.9; margin-bottom: 18px;
}
.about-text p strong { color: var(--gold); font-weight: 500; }
.about-cards {
  display: grid; grid-template-columns: 1fr 1fr; gap: 14px;
}
.a-card {
  padding: 18px; border: 1px solid var(--bdr);
  background: var(--surf); transition: border-color 0.3s;
}
.a-card:hover { border-color: var(--goldd); }
.a-icon { font-size: 1.3rem; margin-bottom: 8px; }
.a-lbl {
  font-family: var(--fm); font-size: 0.6rem;
  letter-spacing: 0.15em; color: var(--w3);
  text-transform: uppercase; margin-bottom: 3px;
}
.a-val { font-size: 0.88rem; color: var(--w1); }

@media (max-width: 768px) {
  .about-wrap { grid-template-columns: 1fr; gap: 28px; }
  .about-cards { grid-template-columns: 1fr 1fr; gap: 10px; }
  .a-card { padding: 14px; }
}
@media (max-width: 380px) {
  .about-cards { grid-template-columns: 1fr; }
}
`;

export default function About() {
  return (
    <>
      <style>{css}</style>
      <section id="about">
        <Reveal className="sec-header">
          <span className="sec-num">01</span>
          <h2 className="sec-title">About <em>Me</em></h2>
          <div className="sec-line" />
        </Reveal>

        <div className="about-wrap">
          <Reveal className="about-text">
            <p>
              I am a <strong>Pharmacovigilance fresher</strong> with practical exposure to drug
              safety workflows through my role at Leiutis Pharmaceuticals LLP. My journey bridges
              bioanalytical laboratory work with regulatory science and patient safety.
            </p>
            <p>
              With hands-on experience in <strong>adverse event identification</strong>,{' '}
              <strong>ICSR processing</strong>, and <strong>MedDRA coding</strong>, I bring a rare
              combination of laboratory precision and regulatory understanding.
            </p>
            <p>
              My <strong>M.Pharm in Quality Assurance</strong> has built a strong foundation in GCP
              compliance, SOP documentation, and drug safety regulatory frameworks — positioning me
              for a dedicated PV / Drug Safety role.
            </p>
          </Reveal>

          <Reveal className="about-cards">
            {DATA.about.map(item => (
              <div className="a-card" key={item.label}>
                <div className="a-icon">{item.icon}</div>
                <div className="a-lbl">{item.label}</div>
                <div className="a-val">{item.value}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
