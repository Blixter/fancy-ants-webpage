import React from 'react'
import { kebabCase } from 'lodash'
import { Link } from 'gatsby'

const PostCard = ({ posts }) => {
  return (
    <div className='container'>
      {posts
        .filter(post => post.node.frontmatter.templateKey === 'blog-post')
        .map(({ node: post }) => (
          <div className='is-parent column is-10 is-offset-1' key={post.id}>
            <div
              className='blog-list-item tile is-child box notification'
              key={post.id}
            >
              <p>
                <Link
                  className='title has-text-primary is-size-4'
                  to={post.fields.slug}
                >
                  {post.frontmatter.title}
                </Link>
                <br />
                <span className='subtitle is-size-6 is-block'>
                  {post.frontmatter.date}
                </span>
              </p>
              <p>{post.excerpt}</p>
              {post.frontmatter.tags && post.frontmatter.tags.length ? (
                <div className='content'>
                  <ul className='taglist'>
                    {post.frontmatter.tags.map(tag => (
                      <li className='mb-0' key={tag + `tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <Link className='button is-small' to={post.fields.slug}>
                Keep Reading →
              </Link>
            </div>
          </div>
        ))}
    </div>
  )
}

export default PostCard
