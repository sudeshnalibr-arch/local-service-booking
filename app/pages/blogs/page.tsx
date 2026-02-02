import BlogsBanner from '@/components/blogslayout/blogsbanner/blogsBanner'
import BlogsBest from '@/components/blogslayout/blogsbest/blogsBest'
import BlogsCard from '@/components/blogslayout/blogscard/blogsCard'
import BlogsQuote from '@/components/blogslayout/blogsquote/blogsQuote'
import BlogsSlider from '@/components/blogslayout/blogsslider/blogsSlider'
import React from 'react'

export default function blogsPage() {
  return (
    <>
    <BlogsBanner/>
    <BlogsCard/>
    <BlogsQuote/>
    <BlogsBest/>
    <BlogsSlider/>
    </>
  )
}
