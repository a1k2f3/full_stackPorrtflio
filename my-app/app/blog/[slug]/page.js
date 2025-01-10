'use client';
import { useParams, useRouter } from 'next/navigation';
import blogPosts from '../blog';
export default function Post() {
  const router = useRouter();
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return <p className="text-center mt-10">Post not found</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-8">
        Published on: {new Date().toLocaleDateString()}
      </p>
      <div className="prose max-w-none">{post.content}</div>
    </div>
  );
}
