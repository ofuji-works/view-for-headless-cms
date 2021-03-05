import React from 'react'
import { useRouter } from 'next/router'
import { GetStaticProps, GetStaticPaths } from 'next'
import cliant from '../../utils/intializeAxios'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import blog from '../../re-ducks/blog'
import type { IUpdateParams } from '../../re-ducks/blog/types'
import type { ThunkDispatch } from 'redux-thunk'

const mapStateToProps = () => {
    return {}
}
const mapDispatchToProps = (dispatch: ThunkDispatch<any, undefined, any>) => {
    return {
        updateBlog: (id: string, params: IUpdateParams) => { dispatch(blog.operations.updateBlog(id, params)) }
    }
}
interface IProps {
    updateBlog: (id: string, params: IUpdateParams) => void
    id: string
    title: string
    main_image: {
        url: string
        height: number
        width: number
    }
    publishedAt: string
    revisedAt: string
}

const Edit: React.FC<IProps> = (props) => {
    const router = useRouter()
    const query = router.query
    const { register, handleSubmit } = useForm()
    const onSubmit = (data: IUpdateParams) => {
        if (typeof query.id === 'string') {
            props.updateBlog(query.id, data)
        }   
    }
    return (
        <div className="backGround">
            <div id="main">
                <h1>編集画面</h1>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label>タイトル</label>
                            <div>
                                <input className="title" type="text" name="title" defaultValue={props.title} ref={register} placeholder="タイトル" />
                            </div>
                        </div>
                        <input className="submit" type="submit"/>
                    </form>
                </div>
            </div>
            <style jsx>{`
                .backGround {
                    background-color: #F4F4F4;
                    padding: 100px;
                }
                #main {
                    width: 100%;
                    padding: 100px 50px;
                    background-color: #FFFFFF;
                }
                .title {
                    padding: 10px;
                    border: solid 2px;
                    border-radius: 5px;
                    width: 100%;
                }
                .submit {
                    background-color: green;
                    padding: 10px;
                }
            `}</style>
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Edit)

export const getStaticProps: GetStaticProps<any, {id: string}> = async (context) => {
    const props = await cliant.get(`/blogs/${context.params?.id}`)
        .then((res) => {
            return res.data
        })
        .catch((e) => {
            console.log(e)
            return {}
        })
    return {
        props: props,
        revalidate: 1
    }
}
export const getStaticPaths: GetStaticPaths = async () => {
    const blogsInfo = await cliant.get('/blogs')
        .then((res) => {
            return res.data.contents
        })
        .catch((e) => {
            console.log(e)
            return []
        })
    const paths = await blogsInfo.map((blog: any) => {
        return { params: { id: blog.id} }
    })
    return {
        paths: paths,
        fallback: true
    }
}
