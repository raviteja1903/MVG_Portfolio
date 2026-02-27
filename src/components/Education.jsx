import { Reveal } from './useReveal';
import { DATA } from '../data';

const css = `
.edu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}
.edu-card {
  padding: 32px; border: 1px solid var(--bdr);
  background: var(--surf); position: relative;
  overflow: hidden; transition: all 0.3s;
}
.edu-card::before {
  content: ''; position: absolute;
  top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(to right, var(--gold), transparent);
  transform: scaleX(0); transition: transform 0.3s;
  transform-origin: left;
}
.edu-card:hover::before { transform: scaleX(1); }
.edu-card:hover { border-color: var(--goldd); }
.edu-deg {
  font-family: var(--fd);
  font-size: 1.2rem; font-weight: 500;
  color: var(--w1); margin-bottom: 6px; line-height: 1.3;
}
.edu-school { font-size: 0.82rem; color: var(--w2); margin-bottom: 3px; }
.edu-yr {
  font-family: var(--fm); font-size: 0.65rem;
  color: var(--w3); letter-spacing: 0.15em; margin-bottom: 14px;
}
.edu-cgpa {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 5px 12px;
  background: var(--goldd); border: 1px solid var(--goldd);
}
.cgpa-lbl {
  font-family: var(--fm); font-size: 0.6rem;
  color: var(--w3); text-transform: uppercase; letter-spacing: 0.1em;
}
.cgpa-val {
  font-family: var(--fd); font-size: 1.1rem;
  font-weight: 500; color: var(--gold);
}

@media (max-width: 768px) {
  .edu-grid { grid-template-columns: 1fr; }
  .edu-card { padding: 22px; }
}
`;

export default function Education() {
  return (
    <>
      <style>{css}</style>
      <section id="education" className="alt-bg">
        <Reveal className="sec-header">
          <span className="sec-num">04</span>
          <h2 className="sec-title">Education <em>&amp; Training</em></h2>
          <div className="sec-line" />
        </Reveal>

        <div className="edu-grid">
          {DATA.education.map((e, i) => (
            <Reveal key={i} className="edu-card">
              <div className="edu-deg">{e.degree}</div>
              <div className="edu-school">{e.school}</div>
              <div className="edu-yr">{e.year}</div>
              <div className="edu-cgpa">
                <span className="cgpa-lbl">CGPA</span>
                <span className="cgpa-val">{e.cgpa}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
