import { createSelector } from 'reselect'

const blogsSelector = (state: any) => state.getBlogList
export const getBlogsSlector = createSelector(
    [blogsSelector],
    (data) => {
        return data
    }
)
