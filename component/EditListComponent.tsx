import Link from 'next/link'
import React, { useEffect, useMemo } from 'react'
import { IMapStateToDispatch, IMapStateToProps } from '../container/EditContainer'

type IProps = IMapStateToProps<any> & IMapStateToDispatch<() => void>

export const EditListComponent: React.FC<IProps> = (props) => {

    useEffect(() => {
        props.getBlogList()
    }, [])

    const blogs = useMemo(() => {
        if (props.blogs.state === 'SUCCESS') {
            return props.blogs.payload.data.contents
        } else {
            return []
        }
    }, [ props.blogs ])

    console.log(props)

    const data = blogs.map((blog: any) => {
        return (
            <div>
            <Link
                href={{
                    pathname: '/edit/[id]',
                    query: { id: blog.id }
                }}
            >
                {blog.title}
            </Link>
            </div>
        )
    })

    return (
        <>
            {data}
        </>
    )
}
