import TableOfContent from '@/components/Blog/TableOfContent'
import ArticlePage from '@/components/Common/ArticlePage'
import { getArticle } from '@/lib/actions/article.action'
import React from 'react'

const page = async ({ params }) => {
  const { blogSlug } = await params
  const {article}=await getArticle(blogSlug)
  return (
    <main className='grid grid-cols-1 lg:grid-cols-10 gap-4 lg:gap-8'>
      <aside className='col-span-3 h-auto relative'>
        <TableOfContent content={article?.content} />
      </aside>
      <div className="col-span-7">
        {article?.content ? <ArticlePage content={article.content} /> : <p className='my-16 text-2xl font-bold text-center'>No Article Found</p>}
      </div>
    </main>
  )
}

export default page