import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBlogs } from '../../../redux/actions/blog_actions'
import Button from '../../../utils/Button/Button'
import BlogCard from '../../Components/BlogCard/BlogCard'
import { BlogList } from './blog.styles'

export default function BlogDash() {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.blog.blogs)

  useEffect(() => {
    dispatch(getAllBlogs())
  }, [dispatch])
  return (
    <>
      <h2>Blog</h2>
      <Button
        type="primary"
        link="/dashboard/add-blog"
        text="Crear nuevo articulo"
        size="md"
      />
      <BlogList>
        {posts.map((post) => (
          <BlogCard
            key={post._id}
            image={post.image}
            title={post.title}
            status={post.status}
            date={post.createdAt}
            slug={post.slug}
          />
        ))}
      </BlogList>
    </>
  )
}