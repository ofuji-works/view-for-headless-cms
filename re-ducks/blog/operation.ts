import cliant from '../../utils/intializeAxios'
import { Dispatch } from 'redux'
import { ActionCreator } from './actions'
import { IUpdateParams } from './types'


export const getBloglist = () => {

    return async (dispatch: Dispatch) => {
        await dispatch(ActionCreator('GET_BLOG_LIST', 'LOADING'))
        cliant.get('/blogs?fields=id,title,main_image,createdAt')
            .then((res) => {
                console.log('GET_BLOG_LIST', res)
                dispatch(ActionCreator('GET_BLOG_LIST', 'SUCCESS', res))
            })
            .catch((e) => {
                console.log('GET_BLOG_LIST', e)
                dispatch(ActionCreator('GET_BLOG_LIST', 'FAILED'))
            } )
    }
}

export const updateBlog: (id: string, params: IUpdateParams) => (dispatch: Dispatch) => void = (id, params) => {

    return async (dispatch: Dispatch) => {
        await dispatch(ActionCreator('UPDATE_BLOG', 'LOADING'))
        cliant.patch(`/blogs/${id}`, params, {
            headers: {
                'X-WRITE-API-KEY': process.env.X_WRITE_API_KEY
            }
        })
        .then((res) => {
            console.log('UPDATE_BLOG', res)
            dispatch(ActionCreator('UPDATE_BLOG', 'SUCCESS'))
        })
        .catch((e) => {
            console.log('UPDATE_BLOG', e)
            dispatch(ActionCreator('UPDATE_BLOG', 'FAILED'))
        })
            
    }

}
