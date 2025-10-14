/*
TEAM PLAN:
Cycle 1 (Driver: Kyle Carlos, Navigator: Louie Mata): Extract components, import data, render unstyled cards
Cycle 2 (Driver: Louie Mata, Navigator: Kyle Carlos): Build responsive grid layout with Tailwind
Cycle 3 (Driver: Zainab Tameem, ): Style card details, buttons, typography, and add hover effects

Grid: 1 column mobile, 2 columns tablet, 3 columns desktop
Colors: Dark bg (#1a1a1a), white cards, accent green (#10b981) for buttons
*/

'use client';
import Link from 'next/link';
import { products } from './src/data/products.js';
import CardLayout from './src/component/CardLayout.js';

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col justify-center bg-emerald-900 p-8 text-center align-middle">
        <header className="mb-8 border-b pb-4">
          <h1 className="text-4xl font-bold">
            Pair Programming List Component Activity
          </h1>
        </header>
        <section>
          <header>
            <h2 className="text-xl">Coffee Card Grid Layout</h2>
            <p>
              Create a set of cards and card layout component based on the
              following jsx.
            </p>
          </header>
          <div>
            {/* TODO: Create a responsive card grid here. use the following to template your card content and style with tailwind */}
            <CardLayout items={products} />
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 GROUP NAME</p>
      </footer>
    </div>
  );
}
