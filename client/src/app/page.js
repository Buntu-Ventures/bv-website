import Hero1 from '@/components/hero1';
import Hero2 from '@/components/hero2';
import Hero3 from '@/components/hero3';
import Hero4 from '@/components/hero4';
import Nav from '@/components/nav/nav';

export default function HomePage() {
  return (
    <>
      <div>
        <Nav />
        <Hero1 />
        <div
          style={{ maxWidth: 800, margin: 'auto', textAlign: 'center', padding: '60px 16px' }}
          className="whoWeAreContainer"
        >
          <div id="about" />
          <h2>Who We Are</h2>
          <p>
            Buntu Ventures is a consulting and venture-building company. We provide
            consulting, management, marketing, business development, and coaching to
            clients. Alongside client work, we build internal, self-funded digital
            products and in-house projects using only our own capital.
          </p>
          <p>
            We are not an investment fund and we do not accept or manage third-party
            capital.
          </p>
        </div>
        <div id="careers" />
        <Hero2 />
        <div id="contact" />
        <Hero3 />
        <Hero4 />
      </div>
    </>
  );
}
