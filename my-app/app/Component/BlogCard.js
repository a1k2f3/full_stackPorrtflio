"use client";
import Link from 'next/link';

export default function BlogCard({ title,slug,date,category,excerpt }) {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <span className="block p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-500">{date} • {category}</p>
        <p className="text-gray-700 mt-2">{excerpt}</p>
      </span>
    </Link>
  );
}
