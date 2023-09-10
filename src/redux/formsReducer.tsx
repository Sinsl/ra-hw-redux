import {
  CHANGE_FORM_TITLE,
  CHANGE_FORM_PRICE,
  CHANGE_FILTER_VALUE,
  CHANGE_EDITED_ID
} from "./actions";
import { StateForm, ActionForm} from "../types/typesNotes";

const initialState = {
  titleValue: '',
  priceValue: '',
  filterValue: '',
  editedId: ''
};

const formReducer = (state: StateForm = initialState, action: ActionForm) => {
  switch (action.type) {
    case CHANGE_FORM_TITLE:
      return {
        ...state,
        titleValue: action.payload
      }
    case CHANGE_FORM_PRICE:
      return {
        ...state,
        priceValue: action.payload
      }
    case CHANGE_FILTER_VALUE:
      return {
        ...state,
        filterValue: action.payload,
      }
    case CHANGE_EDITED_ID:
      return {
        ...state,
        editedId: action.payload,
      }
    default:
      return state;
  }
};

export default formReducer;

