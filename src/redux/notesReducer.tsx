import { ADD_NOTE_ARR, REMOVE_NOTE_ARR, CHANGE_NOTE_ARR, FITLER_NOTE_ARR} from "./actions";
import { arrNotes } from "../data/arrNotes";
import { StateNotes } from "../types/typesNotes";
import { ActionsNotes } from "../types/typesNotes";

const initialState: StateNotes = {
  arrNotes: arrNotes,
  filterNotes: []
};

const notesReducer = (state: StateNotes = initialState, action: ActionsNotes) => {
  switch (action.type) {
    case ADD_NOTE_ARR:
      return {
        ...state,
        arrNotes: [ ...state.arrNotes, action.payload ]
      }
    case REMOVE_NOTE_ARR:
      return {
        ...state,
        arrNotes: state.arrNotes.filter(item => item.id != action.payload)
      }      
    case CHANGE_NOTE_ARR: 
      return {
        ...state,
        arrNotes: state.arrNotes.map(item => {
          return item.id === action.payload.id ? action.payload : item
        })
      }
    case FITLER_NOTE_ARR: 
      return {
        ...state,
        filterNotes: state.arrNotes.filter(item => item.title.toLowerCase().includes(action.payload))
      }
    default:
      return state;
  }
};

export default notesReducer;