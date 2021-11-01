import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Todo from "../models/TodoModel"

import { fetchTodos } from '../store/actions'

// eslint-disable-next-line no-shadow
// @ts-ignore
// компонент, готовый принимать через props действие вызова получения
// списка моделей задач и наблюдаемое свойство со списком моделей задач 
const TodosComponent = ({ fetchTodos, todos }) => {
  // хук, устанавливающий обработчик события монтирования компонента в виртуальный дом
  useEffect(() => {
        // вызов действия хранилища: получить откуда-то список моделей задач
        fetchTodos()
    }, [fetchTodos]) // наблюдать за внешним (из словаря props) свойством fetchTodos
    // и вызывать срабатывание обработчика, как только значение этого свойства получено

    // @ts-ignore
    return (
        <div>
            <h1>Todo</h1>
    {todos.map((todo: Todo) => (
        <p key={todo.id}>
            {todo.id} {todo.title}
        </p>
    ))}
    </div>
);
};
// список свойств состояния для внедрения
const mapStateToProps = (state: { todos: Todo[] }) => ({
    todos: state.todos,
})
// список действий
const mapDispatchToProps = { fetchTodos }
// создание компонента-обертки, не имеющего собственного представления,
// и внедряющего свойства состояния и действия через props
export default connect(mapStateToProps, mapDispatchToProps)(TodosComponent)
