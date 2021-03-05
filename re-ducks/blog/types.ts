export type ActionType = 'GET_BLOG_LIST' | 'UPDATE_BLOG'
export type Process = 'SUCCESS' | 'LOADING' | 'FAILED'

export interface IAction {
    type: ActionType
    process: Process
    payload: unknown
}

export interface IState {
    state: string
    payload?: unknown
}

export interface IUpdateParams {
    title?: string
}
