import { connect } from 'react-redux'
import blogs from '../re-ducks/blog'
import { BlogListComponent } from '../component/BlogListComponent'

interface IMapStateToProps<T> {
    blogs: T
}

const mapStateToProps: (state: any)  => IMapStateToProps<any> = (state) => {
    return {
        blogs: blogs.selectors.getBlogsSlector(state)
    }
}

const mapStateToDispatch = (dispatch: any) => {
    return {
        getBloglist: () => { dispatch(blogs.operations.getBloglist()) }
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(BlogListComponent)
