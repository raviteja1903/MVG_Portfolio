import { Reveal } from './useReveal';
import { DATA } from '../data';

const css = `
.pub-list { display: flex; flex-direction: column; gap: 16px; }
.pub-item {
  display: flex; gap: 20px; align-items: flex-start;
  padding: 24px; border: 1px solid var(--bdr);
  background: var(--surf); transition: all 0.3s;
}
.pub-item:hover { border-color: var(--goldd); }
.pub-badge {
  font-family: var(--fm); font-size: 0.58rem;
  letter-spacing: 0.12em; text-transform: uppercase;
  padding: 5px 9px; white-space: nowrap; flex-shrink: 0;
}
.pub-badge.r { background: #4ecdc420; border: 1px solid #4ecdc415; color: #4ecdc4; }
.pub-badge.p { background: var(--goldd); border: 1px solid var(--goldd); color: var(--gold); }
.pub-badge.c { background: #6c63ff20; border: 1px solid #6c63ff30; color: #9b96ff; }
.pub-title { font-size: 0.88rem; color: var(--w1); line-height: 1.6; }

@media (max-width: 768px) {
  .pub-item { flex-direction: column; gap: 10px; padding: 18px; }
  .pub-badge { white-space: normal; }
}
`;

export default function Publications() {
  return (
    <>
      <style>{css}</style>
      <section id="publications" className="alt-bg">
        <Reveal className="sec-header">
          <span className="sec-num">06</span>
          <h2 className="sec-title">Publications <em>&amp; Certs</em></h2>
          <div className="sec-line" />
        </Reveal>

        <div className="pub-list">
          {DATA.publications.map((p, i) => (
            <Reveal key={i} className="pub-item">
              <span className={`pub-badge ${p.type}`}>{p.badge}</span>
              <div className="pub-title">{p.title}</div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
