import { Reveal } from './useReveal';
import { DATA } from '../data';

const css = `
.exp-wrap { position: relative; padding-left: 32px; }
.exp-wrap::before {
  content: ''; position: absolute;
  left: 0; top: 0; bottom: 0; width: 1px;
  background: linear-gradient(to bottom, var(--gold), transparent);
}
.exp-card {
  position: relative; margin-bottom: 40px;
  padding: 32px 36px;
  border: 1px solid var(--bdr);
  background: var(--surf);
  transition: all 0.3s;
}
.exp-card::before {
  content: ''; position: absolute;
  left: -38px; top: 32px;
  width: 12px; height: 12px;
  border: 2px solid var(--gold);
  background: var(--bg); border-radius: 50%;
}
.exp-card:hover { border-color: var(--goldd); transform: translateX(4px); }
.exp-top {
  display: flex; justify-content: space-between;
  align-items: flex-start; flex-wrap: wrap;
  gap: 10px; margin-bottom: 6px;
}
.exp-co {
  font-family: var(--fd);
  font-size: 1.4rem; font-weight: 500; color: var(--gold);
}
.exp-period {
  font-family: var(--fm); font-size: 0.65rem;
  letter-spacing: 0.12em; color: var(--teal);
  padding: 4px 10px;
  border: 1px solid var(--teald); background: var(--teald);
}
.exp-role { font-size: 0.93rem; color: var(--w2); margin-bottom: 3px; }
.exp-loc {
  font-family: var(--fm); font-size: 0.65rem;
  color: var(--w3); letter-spacing: 0.1em; margin-bottom: 18px;
}
.exp-list { list-style: none; }
.exp-list li {
  position: relative; padding-left: 18px;
  font-size: 0.85rem; color: var(--w2);
  line-height: 1.8; margin-bottom: 8px;
}
.exp-list li::before {
  content: '→'; position: absolute; left: 0;
  color: var(--gold); font-size: 0.72rem;
}

@media (max-width: 768px) {
  .exp-wrap { padding-left: 18px; }
  .exp-card { padding: 22px 18px; }
  .exp-card::before { left: -25px; }
  .exp-top { flex-direction: column; gap: 8px; }
}
`;

export default function Experience() {
  return (
    <>
      <style>{css}</style>
      <section id="experience">
        <Reveal className="sec-header">
          <span className="sec-num">03</span>
          <h2 className="sec-title">Work <em>Experience</em></h2>
          <div className="sec-line" />
        </Reveal>

        <div className="exp-wrap">
          {DATA.experience.map((exp, i) => (
            <Reveal key={i} className="exp-card">
              <div className="exp-top">
                <div className="exp-co">{exp.company}</div>
                <div className="exp-period">{exp.period}</div>
              </div>
              <div className="exp-role">{exp.role}</div>
              <div className="exp-loc">📍 {exp.location}</div>
              <ul className="exp-list">
                {exp.achievements.map((a, j) => <li key={j}>{a}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
