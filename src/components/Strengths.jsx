import { Reveal } from './useReveal';
import { DATA } from '../data';

const css = `
.str-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px; margin-bottom: 48px;
}
.str-card {
  padding: 28px; border: 1px solid var(--bdr);
  background: var(--surf); transition: all 0.3s;
  position: relative; overflow: hidden;
}
.str-card::before {
  content: ''; position: absolute;
  left: 0; top: 0; bottom: 0; width: 2px;
  background: var(--gold);
  transform: scaleY(0); transition: transform 0.3s; transform-origin: top;
}
.str-card:hover::before { transform: scaleY(1); }
.str-card:hover { border-color: var(--goldd); }
.str-icon { font-size: 1.6rem; margin-bottom: 12px; }
.str-text { font-size: 0.88rem; color: var(--w2); line-height: 1.7; }

.extras-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 40px;
}
.extra-title {
  font-family: var(--fm); font-size: 0.65rem;
  letter-spacing: 0.2em; color: var(--teal);
  text-transform: uppercase; margin-bottom: 20px;
  display: flex; align-items: center; gap: 8px;
}
.extra-title::after {
  content: ''; flex: 1; height: 1px; background: var(--bdrb);
}
.extra-item {
  padding: 14px 0; border-bottom: 1px solid var(--bdr);
  font-size: 0.85rem; color: var(--w2); line-height: 1.6;
}
.extra-item:last-child { border-bottom: none; }
.lang-item {
  display: flex; align-items: center; justify-content: space-between;
  padding: 12px 0; border-bottom: 1px solid var(--bdr);
}
.lang-item:last-child { border-bottom: none; }
.lang-name { font-size: 0.9rem; color: var(--w1); }
.lang-level {
  font-family: var(--fm); font-size: 0.6rem;
  letter-spacing: 0.12em; color: var(--teal);
  text-transform: uppercase; padding: 3px 10px;
  border: 1px solid var(--teald); background: var(--teald);
}

@media (max-width: 900px) {
  .extras-grid { grid-template-columns: 1fr; gap: 28px; }
}
@media (max-width: 768px) {
  .str-grid { grid-template-columns: 1fr; }
}
`;

export default function Strengths() {
  return (
    <>
      <style>{css}</style>
      <section id="strengths">
        <Reveal className="sec-header">
          <span className="sec-num">07</span>
          <h2 className="sec-title">Strengths <em>&amp; Activities</em></h2>
          <div className="sec-line" />
        </Reveal>

        <Reveal className="str-grid">
          {DATA.strengths.map((s, i) => (
            <div className="str-card" key={i}>
              <div className="str-icon">{s.icon}</div>
              <div className="str-text">{s.text}</div>
            </div>
          ))}
        </Reveal>

        <Reveal className="extras-grid">
          <div>
            <div className="extra-title">Curricular Activities</div>
            {DATA.activities.map((a, i) => (
              <div className="extra-item" key={i}>🏆 {a}</div>
            ))}
          </div>
          <div>
            <div className="extra-title">Languages</div>
            {DATA.languages.map(l => (
              <div className="lang-item" key={l.name}>
                <span className="lang-name">{l.name}</span>
                <span className="lang-level">{l.level}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
