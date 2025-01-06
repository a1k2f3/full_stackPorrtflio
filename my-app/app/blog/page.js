"use client";
import BlogCard from '../Component/BlogCard';
import blogPosts from './blog';
import { useEffect, useState } from 'react';
const page = () => {
    const [name, setName] = useState([]);
    useEffect(()=>{
        setName(blogPosts)
    },[])
    // title: 'Understanding Server Components in Next.js',
    //   slug: 'server-components-nextjs',
    //   date: '2025-01-05',
    //   category: 'Next.js',
    //   excerpt: 'A deep dive into server components in Next.js and how they improve performance.',
    //   content: `
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-5xl font-bold text-center mb-8">My Advanced Blog</h1>
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {name.map((post) => (
          <BlogCard key={post.id} title={post.title} slug={post.slug} category={post.category} excerpt={post.excerpt
            
          } />
          
        ))}
      </section>
    </div>)

}

export default page