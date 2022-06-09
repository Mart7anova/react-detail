import {reducer, StateType, TOGGLE_COLLAPSED} from './Reducer';

test('the reducer should change the value to the true', () => {
    //data
    const state: StateType = {
        collapsed: false
    }
    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})
    //expect
    expect(newState.collapsed).toBe(true)
})
test('the reducer should change the value to the false', () => {
    //data
    const state: StateType = {
        collapsed: true
    }
    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})
    //expect
    expect(newState.collapsed).toBe(false)
})
test('the reducer should return error', () => {
    //data
    const state: StateType = {
        collapsed: true
    }
    expect(() => {
        reducer(state, {type: 'FAKE_TYPE'})
    }).toThrowError()
})