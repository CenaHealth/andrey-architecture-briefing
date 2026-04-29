import { Hero } from './sections/Hero';
import { ThreeLayers } from './sections/ThreeLayers';
import { OrchestrationLayer } from './sections/OrchestrationLayer';
import { SurfacesAreSeparate } from './sections/SurfacesAreSeparate';
import { WhereOpenClawFits } from './sections/WhereOpenClawFits';
import { OpenQuestions } from './sections/OpenQuestions';
import { Closing } from './sections/Closing';

function TopBar() {
  return (
    <div
      className="sticky top-0 z-40 w-full"
      style={{
        background: 'rgba(245, 238, 229, 0.85)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid var(--color-border-default)',
      }}
    >
      <div className="mx-auto max-w-[1200px] flex items-center justify-between px-6 py-3">
        <a
          href={import.meta.env.BASE_URL}
          aria-label="Cena Health"
          style={{ display: 'inline-flex', alignItems: 'center' }}
        >
          <img
            src={`${import.meta.env.BASE_URL}logo-cenahealth-teal.svg`}
            alt="Cena Health"
            height={28}
            style={{ height: 28, width: 'auto' }}
          />
        </a>
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--text-utility-overline)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontWeight: 600,
            color: 'var(--color-text-faint)',
          }}
        >
          Ava Architecture Briefing
        </span>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer
      className="mt-12 py-8 text-center"
      style={{
        borderTop: '1px solid var(--color-border-default)',
        fontSize: 'var(--text-body-04)',
        color: 'var(--color-text-faint)',
      }}
    >
      <img
        src={`${import.meta.env.BASE_URL}logo-cenahealth-teal.svg`}
        alt=""
        height={20}
        style={{
          height: 20,
          width: 'auto',
          display: 'inline-block',
          marginRight: 12,
          verticalAlign: 'middle',
          opacity: 0.7,
        }}
      />
      <span>&copy; Cena Health · internal briefing</span>
    </footer>
  );
}

export function App() {
  return (
    <>
      <TopBar />
      <Hero />
      <div className="mx-auto max-w-[1080px] px-6">
        <main style={{ width: '100%', margin: '0 auto' }}>
          <ThreeLayers />
          <OrchestrationLayer />
          <SurfacesAreSeparate />
          <WhereOpenClawFits />
          <OpenQuestions />
          <Closing />
        </main>
      </div>
      <Footer />
    </>
  );
}
