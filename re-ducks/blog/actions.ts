import { ActionType, Process } from './types'

export function ActionCreator(type: ActionType, process: Process, payload: unknown = null) {
    return { type, process, payload }
}
