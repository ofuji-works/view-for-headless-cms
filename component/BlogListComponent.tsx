import React, { useEffect, useMemo } from 'react'
import Link from 'next/link'
import { Grid } from '@material-ui/core'
import { useInView } from 'react-intersection-observer';

const Card = (props: any) => {

  const [ref, inView] = useInView({
    threshold: 0,
    delay: 100
  })
  return (
    <Link
      href={{
        pathname: '/blog/[id]',
        query: { id: props.id }
      }}
    >
      <Grid
        item
        xs={5}
        sm={5}
        style={{
          backgroundColor: '#F4F4F4',
          margin: '20px',
          opacity: inView ? 1 : 0,
          // animation: inView ? `1s ease-out` : 0,
        }}
        ref={ref}
      >
        <h2
          style={{
            padding: '10px',
            borderTop: 'solid 3px'
          }}
        >
          {props.title}{inView}
        </h2>
        <div
          style={{ position: 'relative' }}
        >
          <div>
            <img width="100%" height="80%" src={props.main_image.url} />
          </div>
        </div>
      </Grid>
    </Link>
  )
}

export const BlogListComponent: React.FC = (props: any) => {

    useEffect(() => {
      props.getBloglist()
    }, [])

    const blogs = useMemo(() => {
      if (props.blogs.state === 'SUCCESS') {
        return props.blogs.payload.data.contents
      } else {
        return []
      }
    }, [props.blogs])
  
    const ContentCards = blogs.map((blog: unknown) => {
      return (
        <Card key={blog.id} {...blog} />
      )
    })

    return (
      <>
        <div id="blog">
            <Grid
              container
              direction="row"
              justify='flex-start'
              alignItems='flex-start'
              style={{
                overflow: 'scroll',
                height: '100%'
              }}
            >
              {ContentCards}
            </Grid>
        </div>
        <style jsx>{`
          h1 {
            margin-top: 60px;
            float: right;
            transform: rotate(90deg);
            -moz-transform: rotate(90deg);
            -webkit-transform: rotate(90deg);
            font-size: 45px;
          }
          #blog {
            height: 100vh;
            background-color: #F4F4F4;
            box-shadow: 5px 5px 5px #CCCCCC;
            border-radius: 15px;
          }
        `}</style>
        </>
    )
}
