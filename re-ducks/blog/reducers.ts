import { IAction, IState } from './types'

const initialState: IState = {
    state: 'init'
}

const getBlogList = (state = initialState, action: IAction) =>  {
    if (action.type === 'GET_BLOG_LIST') {
        switch (action.process) {
            case 'SUCCESS':
                return {
                    state: action.process,
                    payload: action.payload
                }

            case 'LOADING':
                return {
                    state: action.process
                }

            case 'FAILED':
                return {
                    state: action.process
                }
            
            default:
                return state
        }
    }
    else {
        return state
    }
}

const updateBlog = (state = initialState, action: IAction) =>  {
    if (action.type === 'UPDATE_BLOG') {
        switch (action.process) {
            case 'SUCCESS':
                return {
                    state: action.process,
                    payload: action.payload
                }

            case 'LOADING':
                return {
                    state: action.process
                }

            case 'FAILED':
                return {
                    state: action.process
                }
            
            default:
                return state
        }
    }
    else {
        return state
    }
}

export default {
    getBlogList,
    updateBlog
}
