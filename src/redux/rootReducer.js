import {
  CHANGE_TEXT,
  COLS_RESIZE,
  ROWS_RESIZE,
  CHANGE_STYLES,
  APPLY_STYLE,
  CHANGE_TABLE_NAME,
} from './constants'

export function rootReducer(state, action) {
  switch (action.type) {
    case COLS_RESIZE: {
      const prevState = state.colState || {}
      prevState[action.cols.id] = action.cols.value
      return {
        ...state,
        colState: prevState, // id value
      }
    }
    case ROWS_RESIZE: {
      const prevState = state.rowState || {}
      prevState[action.rows.id] = action.rows.value
      return {
        ...state,
        rowState: prevState,
      }
    }
    case CHANGE_TEXT: {
      const prevState = state['dataState'] || {}
      prevState[action.data.id] = action.data.text
      return {
        ...state,
        currentText: action.data.text,
        dataState: prevState,
      }
    }
    case CHANGE_STYLES: {
      return {
        ...state,
        currentStyles: action.data,
      }
    }
    case APPLY_STYLE: {
      const prevState = state.dataStyles || {}
      action.data.ids.forEach((id) => {
        prevState[id] = { ...prevState[id], ...action.data.style }
      })
      return {
        ...state,
        dataStyles: prevState,
      }
    }
    case CHANGE_TABLE_NAME: {
      return {
        ...state,
        tableName: action.data,
      }
    }
    default: return state
  }
}
