import TableOfContent from '@/components/Blog/TableOfContent'
import ArticlePage from '@/components/Common/ArticlePage'
import React from 'react'

const page = async ({ params }) => {
  const { blogSlug } = await params
  const article={
    content:'<h1>This is a Sample Article</h1> <p>This is the first paragraph of the article. It contains some text and a <a href="https://www.example.com">link</a> to another website.</p> <h2>Heading Level 2</h2> <p>This is another paragraph with some more text. It also includes a list:</p> <ul> <li>Item 1</li> <li>Item 2</li> <li>Item 3</li> </ul> <h3>Heading Level 3</h3> <p>This paragraph contains a <code>code snippet</code>.</p> <blockquote> This is a blockquote. It is used to quote a longer passage of text from another source. </blockquote> <h4>Heading Level 4</h4> <p>This paragraph contains an ordered list:</p> <ol> <li>First step</li> <li>Second step</li> <li>Third step</li> </ol> <h5>Heading Level 5</h5> <p>This is another paragraph with some text.</p> <h6>Heading Level 6</h6> <p>This is the last paragraph of the article.</p>'
  }
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