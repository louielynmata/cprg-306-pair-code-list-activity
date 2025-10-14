import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CardItem({
  title,
  subtitle,
  description,
  price,
  category,
  imgPath,
  cta,
}) {
  return (
    <article className="rounded-lg bg-amber-950 p-4 shadow-lg transition-shadow hover:bg-amber-900">
      <header>
        <div className="relative h-48 w-full">
          <Image
            src={imgPath}
            alt={title}
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div>
          <h3 className="text-white-900 py-5 text-3xl font-semibold">
            {title}
          </h3>
          <h4 className="text-white-900 text-uppercase font-medium">
            {subtitle}
          </h4>
        </div>
      </header>
      <div>
        <p className="text-sm leading-relaxed text-gray-100">{description}</p>
        <p className="text-xl font-bold text-yellow-600">${price}</p>
        <p className="mt-5 inline-block rounded bg-amber-800 p-2 text-sm text-white uppercase`>
          {category}
        </p>
        <div className="mt-4 text-right">
          <button className="rounded bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700">
            {cta}
          </button>
        </div>
      </div>
    </article>
  );
}
