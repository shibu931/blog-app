import BlogCard from '@/components/Blog/BlogCard'
import React from 'react'

const blogs = [
  {
    image: 'https://tirzepatyd.store/wp-content/uploads/apollo13_images/20333-7ljgc6rny7rufq07c4ix363kjr7y8vhyvq.jpg',
    title: 'New Drug for Obesity',
    date: 'January 15, 2024',
    description:
      'A new drug called retatrutyd is showing promising results in the fight against obesity. This article discusses the drug and its potential benefits.',
    slug:'hamowanie-apetytu-semaglutyd-a-laknienie/'
  },
  {
    image: 'https://tirzepatyd.store/wp-content/uploads/apollo13_images/20333-7ljgc6rny7rufq07c4ix363kjr7y8vhyvq.jpg',
    title: 'New Drug for Obesity',
    date: 'January 15, 2024',
    description:
      'A new drug called retatrutyd is showing promising results in the fight against obesity. This article discusses the drug and its potential benefits.',
    slug:'hamowanie-apetytu-semaglutyd-a-laknienie/'
  },
  {
    image: 'https://tirzepatyd.store/wp-content/uploads/apollo13_images/20333-7ljgc6rny7rufq07c4ix363kjr7y8vhyvq.jpg',
    title: 'New Drug for Obesity',
    date: 'January 15, 2024',
    description:
      'A new drug called retatrutyd is showing promising results in the fight against obesity. This article discusses the drug and its potential benefits.',
    slug:'hamowanie-apetytu-semaglutyd-a-laknienie/'
  },
  {
    image: 'https://tirzepatyd.store/wp-content/uploads/apollo13_images/20333-7ljgc6rny7rufq07c4ix363kjr7y8vhyvq.jpg',
    title: 'New Drug for Obesity',
    date: 'January 15, 2024',
    description:
      'A new drug called retatrutyd is showing promising results in the fight against obesity. This article discusses the drug and its potential benefits.',
    slug:'hamowanie-apetytu-semaglutyd-a-laknienie/'
  },
]

const page = async () => {
  return (
    <>
      <section className='bg-blue-100 pt-28 pb-12 flex items-center justify-center border-b border-blue-200'>
        <h1 className='text-center text-4xl font-bold uppercase text-blue-900 tracking-widest'>Blogs</h1>
      </section>
      <main>
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-10'>
          {blogs.map((blog)=> <BlogCard key={blog.id} {...blog}/>)}
        </section>
      </main>
    </>
  )
}

export default page