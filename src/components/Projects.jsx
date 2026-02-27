import { Reveal } from './useReveal';
import { DATA } from '../data';

const css = `
.proj-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 20px;
}
.proj-card {
  padding: 32px; border: 1px solid var(--bdr);
  background: var(--bg); transition: all 0.3s;
}
.proj-card:hover { border-color: var(--goldd); transform: translateY(-4px); }
.proj-type {
  font-family: var(--fm); font-size: 0.6rem;
  color: var(--teal); letter-spacing: 0.2em;
  text-transform: uppercase; margin-bottom: 14px;
}
.proj-title {
  font-family: var(--fd); font-size: 1.15rem;
  font-weight: 500; color: var(--w1);
  line-height: 1.4; margin-bottom: 10px;
}
.proj-desc { font-size: 0.82rem; color: var(--w3); line-height: 1.7; }

@media (max-width: 768px) {
  .proj-grid { grid-template-columns: 1fr; }
  .proj-card { padding: 22px; }
}
`;

export default function Projects() {
  return (
    <>
      <style>{css}</style>
      <section id="projects">
        <Reveal className="sec-header">
          <span className="sec-num">05</span>
          <h2 className="sec-title">Research <em>Projects</em></h2>
          <div className="sec-line" />
        </Reveal>

        <div className="proj-grid">
          {DATA.projects.map((p, i) => (
            <Reveal key={i} className="proj-card">
              <div className="proj-type">{p.type}</div>
              <div className="proj-title">{p.title}</div>
              <div className="proj-desc">{p.desc}</div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
