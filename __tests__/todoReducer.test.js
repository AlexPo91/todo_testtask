const {default: todoReducer, setNewTaskAC, addNewTaskAC, deleteTaskAC, saveChangeTaskAC, setActiveStatusAC} = require('../src/redux/todoReducer')
const state = {
    todos: [{id: 1, task: 'New Task', isActive: false}],
    newTask: ''
}
test('Inter new Task', ()=>{
    let action = setNewTaskAC('New Task')
    let newState = todoReducer(state, action)
    expect(newState.newTask).toBe('New Task')
})

test('Added new Task', ()=>{
    let action = setNewTaskAC('New Task')
    let newState = todoReducer(state, action)
    newState = todoReducer(newState, addNewTaskAC())
    expect(newState.todos.length).toBe(2)
})

test('Delete Task', ()=>{
    let action = deleteTaskAC(1)
    let newState = todoReducer(state, action)
    expect(newState.todos.length).toBe(0)
})

test('Edit Task', ()=>{
    let item = 'Task'
    let action = saveChangeTaskAC(1, item)
    let newState = todoReducer(state, action)
    expect(newState.todos[0].task).toBe("Task")
})

test('Mark completed', ()=>{
    let item = 'Task'
    let action = setActiveStatusAC(1)
    let newState = todoReducer(state, action)
    expect(newState.todos[0].isActive).toBe(true)
})
