import { connect } from 'react-redux'
import blog from '../re-ducks/blog'
import type { AnyAction } from 'redux'
import type { ThunkDispatch } from 'redux-thunk'
import { EditListComponent } from '../component/EditListComponent'

export interface IMapStateToProps<T> {
    blogs: T
}

export interface IMapStateToDispatch<T> {
    getBlogList: T 
}

const mapStateToProps: (state: unknown) => IMapStateToProps<string> = (state) => {
    return {
        blogs: blog.selectors.getBlogsSlector(state)
    }
}

const mapStateToDispatch: (dispatch: ThunkDispatch<any, undefined, AnyAction> ) => IMapStateToDispatch<() => void> = (dispatch) => {
    return {
        getBlogList: () => { dispatch(blog.operations.getBloglist()) }
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(EditListComponent)
