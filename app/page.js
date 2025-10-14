/*
TEAM PLAN:
Cycle 1 (Driver: Kyle Carlos, Navigator: Louie Mata): Extract components, import data, render unstyled cards
Cycle 2 (Driver: Louie Mata, Navigator: Kyle Carlos): Build responsive grid layout with Tailwind
Cycle 3 (Driver: Zainab Tameem, ): Style card details, buttons, typography, and add hover effects

Grid: 1 column mobile, 2 columns tablet, 3 columns desktop
Colors: Dark bg (#1a1a1a), white cards, accent green (#10b981) for buttons
*/


import Link from 'next/link';
import { products } from './data.js';
import CardLayout from './src/component/CardLayout.js';

export default function Home() {
  return (
    <div>
      <main>
        <header>
          <h1>Pair Programming List Component Activity</h1>
        </header>
        <section>
          <header>
            <h2>Coffee Card Grid Layout</h2>
            <p>
              Create a set of cards and card layout component based on the
              following jsx.
            </p>
          </header>
          <div>
            {/* TODO: Create a responsive card grid here. use the following to template your card content and style with tailwind */}
            <CardLayout {...products}/>
            <article>
              <header>
                <div>{/* IMG Goes Here */}</div>
                <div>
                  <h3>Card Title</h3>
                  <p>
                    <strong>Card subheading</strong>
                  </p>
                </div>
              </header>
              <div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eveniet, temporibus.
                </p>
                <div>
                  {/* The Link will follow up to a separate dynamic route that we'll make in a later lab */}
                  <Link href="#">Secondary Action</Link>
                  <button>Primary Action</button>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 GROUP NAME</p>
      </footer>
    </div>
  );
}
