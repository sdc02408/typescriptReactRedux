//action type
const ADD_TODO = 'todos/ADD_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
const REMOVE_TODO = 'todos/REMOVE_TODO' as const;

//액션생성함수
export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: text
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id
});

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id
});

//액션들의 ts타입 준비
//나중에 리듀서를 작성 할 때 action 파라미터의 타입을 설정하기 위해서 액션들의 ts타입을 준비 returntype은 함수에서 반환하는 타입을 가져오게해준다
type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof removeTodo>;

//상태를 위한 티입 및 초기 상태 선언
export type Todo = {
  id: number;
  text: string;
  done: boolean;
};
type TodosState = Todo[];

const initialState: TodosState = [
  { id: 1, text: '타입스크립트 배우기', done: true },
  { id: 2, text: '타입스크립트와 리덕스 함께 사용해보기', done: true },
  { id: 3, text: '투두리스트 만들기', done: false }
];

function todos(state: TodosState = initialState, action: TodosAction): TodosState {
  switch (action.type) {
    case ADD_TODO:
      const nextId = Math.max(...state.map(todo => todo.id)) + 1;
      return state.concat({
        id: nextId,
        text: action.payload,
        done: false
      });
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);
  }
}

export default todos;
