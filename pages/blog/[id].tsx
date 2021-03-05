import React from "react"
import cliant from '../../utils/intializeAxios'
import { GetStaticProps, GetStaticPaths } from 'next'

interface IProps {
    id: string
    title: string
    body?: string
    createdAt: string
    updatedAt: string
}

const Blog: React.FC<IProps> = (props) => {

    return (
        <>
            <div>
                <h1>{props.title}</h1>
            </div>
            <div>
                {
                    props.body ? 
                        <div dangerouslySetInnerHTML={{ __html: props.body }}></div>
                        : ''
                }
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async (context) => {

    const props: unknown = await cliant.get(`/blogs/${context.params?.id}`)
        .then((res) => {
            return res.data
        })
        .catch((e) => {
            console.log(`/blogs/${context.params?.id} : getStaticProps`, e);
            return {}
        })

    return {
        props: props,
        revalidate: 60
    }
}

export const getStaticPaths: GetStaticPaths = async () => {

    const blogsInfo = await cliant.get('/blogs?fields=id')
        .then((res) => {
            return res.data.contents
        } )
        .catch((e) => {
            console.log('/blog/[id] : getStaticPaths', e);
            return []
        })

    const paths = await blogsInfo.map((blog: any) => {
        return { params: { id: blog.id} }
    })

    console.log(paths)

    return {
        paths: paths,
        fallback: true
    }
}

export default Blog
