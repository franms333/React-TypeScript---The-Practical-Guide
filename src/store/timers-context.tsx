import { createContext, useContext, type ReactNode, useReducer } from "react";

export type Timer = {
    name:string,
    duration:number
}

type TimersState = {
    isRunning: boolean;
    timers: Timer[]
}

type TimersContextValue = TimersState & {
    addTimer: (timerData:Timer) => void;
    startTimers: () => void;
    stopTimers: () => void;
}

const initialState: TimersState = {
    isRunning: true,
    timers: []
}

const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext(){
    const timersContext = useContext(TimersContext);

    if(timersContext === null){
        throw new Error('TimersContext is null - that should not be the case!')
    }

    return timersContext
}

type TimersContextProviderProps = {
    children: ReactNode;
}

type StartTimersAction = {
    type: 'START_TIMERS'
}
type StopTimersAction = {
    type: 'STOP_TIMERS'
}
type AddTimersAction = {
    type: 'ADD_TIMER',
    payload: Timer
}

type Action = StartTimersAction | StopTimersAction | AddTimersAction

const timersReducer = (state:TimersState, action:Action): TimersState => {
    if(action.type === 'START_TIMERS'){
        return {
            ...state,
            isRunning: true
        }
    }
    if(action.type === 'STOP_TIMERS'){
        return {
            ...state,
            isRunning: false
        }
    }
    if(action.type === 'ADD_TIMER'){
        
        return {
            ...state,
            timers: [
                ...state.timers,
                {
                    name: action.payload.name,
                    duration: action.payload.duration
                }
            ]
        }
    }

    return state;
}

function TimersContextProvider({children}:TimersContextProviderProps){
    const [timersState, dispatch] = useReducer(timersReducer, initialState);

    const context: TimersContextValue = {
        timers: timersState.timers,
        isRunning: timersState.isRunning,
        addTimer(timerData){
            dispatch({type: 'ADD_TIMER', payload:timerData})
        },
        startTimers(){
            dispatch({type: 'START_TIMERS'})
        },
        stopTimers(){
            dispatch({type: 'STOP_TIMERS'})
        }
    }

    return (
        <TimersContext.Provider value={context}>
            {children}
        </TimersContext.Provider>
    )
}

export default TimersContextProvider;