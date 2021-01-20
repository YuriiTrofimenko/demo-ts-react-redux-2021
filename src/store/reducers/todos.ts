import { FETCH_TODOS } from '../types'
import Todo from "../../models/TodoModel";

const initialState: Todo[] = []

const todosReducer = (state = initialState, action: { type: any; payload: any; }) => {
  switch (action.type) {
      case FETCH_TODOS:
          return action.payload;
      default:
          return state
  }
}

export default todosReducer
