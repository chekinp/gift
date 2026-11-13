import { createRoot } from 'react-dom/client'
import { WaxSeal } from './components/Ornaments'
import './styles/tokens.css'
import './styles/global.css'
import './styles/envelope.css'

function Preview() {
  return (
    <div className="preview">
      <div className="preview__item">
        <div className="preview__seal preview__seal--hero">
          <WaxSeal />
        </div>
        <span>420 px</span>
      </div>
      <div className="preview__item">
        <div className="preview__seal preview__seal--large">
          <WaxSeal />
        </div>
        <span>150 px</span>
      </div>
      <div className="preview__item">
        <div className="preview__seal preview__seal--actual">
          <WaxSeal />
        </div>
        <span>120 px (actual)</span>
      </div>
      <div className="preview__item">
        <div className="preview__seal preview__seal--small">
          <WaxSeal />
        </div>
        <span>80 px</span>
      </div>
    </div>
  )
}

const style = document.createElement('style')
style.textContent = `
  .preview {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    gap: 56px;
    padding: 48px;
    min-height: 100vh;
    background: var(--bg-desk);
  }
  .preview__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    color: var(--ink-muted);
    font: 12px/1.4 var(--font-serif);
    letter-spacing: 0.08em;
  }
  .preview__seal {
    filter: drop-shadow(0 2px 3px rgba(var(--shadow-rgb), 0.26))
      drop-shadow(0 6px 9px rgba(var(--shadow-rgb), 0.16));
  }
  .preview__seal .wax-seal { display: block; }
  .preview__seal--hero { width: 420px; height: 420px; }
  .preview__seal--large { width: 150px; height: 150px; }
  .preview__seal--actual { width: 120px; height: 120px; }
  .preview__seal--small { width: 80px; height: 80px; }
`
document.head.append(style)

createRoot(document.getElementById('root')!).render(<Preview />)
