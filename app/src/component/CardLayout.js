'use client';
import CardItem from './CardItem';

export default function CardLayout({ items }) {
  return (
    <div className="bg-brown-200 grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <CardItem key={item.id ?? item.name} {...item} />
      ))}
    </div>
  );
}
