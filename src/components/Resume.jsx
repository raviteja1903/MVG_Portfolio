import { useState } from 'react';
import { Reveal } from './useReveal';
import resumeB64 from '../assets/resumeB64';

const css = `
.resume-wrap { max-width: 900px; margin: 0 auto; }
.resume-toolbar {
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: 12px; margin-bottom: 24px;
  padding: 16px 24px; background: var(--bg3);
  border: 1px solid var(--bdr);
}
.resume-toolbar-left {
  font-family: var(--fm); font-size: 0.65rem;
  letter-spacing: 0.15em; color: var(--w3); text-transform: uppercase;
}
.resume-toolbar-left span { color: var(--gold); }
.resume-actions { display: flex; gap: 10px; flex-wrap: wrap; }
.resume-embed {
  width: 100%; height: 700px;
  border: 1px solid var(--bdr); background: var(--bg3);
  display: block;
}
.resume-fallback {
  padding: 60px; text-align: center;
  background: var(--bg3); border: 1px solid var(--bdr);
}
.resume-fallback p {
  color: var(--w3); font-size: 0.88rem; margin-bottom: 20px;
}

@media (max-width: 768px) {
  .resume-toolbar { flex-direction: column; align-items: stretch; text-align: center; }
  .resume-actions { justify-content: center; }
  .resume-embed { height: 500px; }
  .resume-fallback { padding: 32px 20px; }
}
`;

const PDF_SRC = `data:application/pdf;base64,${resumeB64}`;
const DOWNLOAD_NAME = 'Venkata_Guru_Resume.pdf';

export default function Resume() {
  const [showFallback, setShowFallback] = useState(
    /iPad|iPhone|iPod|Android/i.test(navigator.userAgent)
  );

  return (
    <>
      <style>{css}</style>
      <section id="resume" className="alt-bg">
        <Reveal className="sec-header">
          <span className="sec-num">08</span>
          <h2 className="sec-title">My <em>Resume</em></h2>
          <div className="sec-line" />
        </Reveal>

        <Reveal className="resume-wrap">
          <div className="resume-toolbar">
            <div className="resume-toolbar-left">
              Resume — <span>Madasu Venkata Guruvulu</span> · Pharmacovigilance Professional
            </div>
            <div className="resume-actions">
              <a
                className="btn-outline"
                href={PDF_SRC}
                download={DOWNLOAD_NAME}
                style={{ padding: '9px 20px', fontSize: '0.68rem' }}
              >
                ⬇ Download PDF
              </a>
              {!showFallback && (
                <button
                  className="btn-gold"
                  onClick={() => {
                    const el = document.getElementById('resumeEmbed');
                    if (el.requestFullscreen) el.requestFullscreen();
                  }}
                  style={{ padding: '9px 20px', fontSize: '0.68rem', cursor: 'pointer' }}
                >
                  ⛶ Fullscreen
                </button>
              )}
            </div>
          </div>

          {showFallback ? (
            <div className="resume-fallback">
              <p>PDF preview is not supported on this device.</p>
              <a className="btn-gold" href={PDF_SRC} download={DOWNLOAD_NAME}>
                ⬇ Download Resume PDF
              </a>
            </div>
          ) : (
            <iframe
              id="resumeEmbed"
              className="resume-embed"
              src={PDF_SRC}
              title="Resume"
              onError={() => setShowFallback(true)}
            />
          )}
        </Reveal>
      </section>
    </>
  );
}
