import { SyntheticEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTitle, changePrice, changeEditedId } from "../redux/changeForms";
import { Store } from "../types/typesNotes";

interface AddNotesFormProps {
  handlerSubmit: (e: SyntheticEvent) => void
}


export const AddNotesForm = ({handlerSubmit}: AddNotesFormProps) => {
  const dispatch = useDispatch();
  const { titleValue, priceValue, editedId } = useSelector((state: Store) => state.forms);

  const handlerCancel = () => {
    dispatch(changeTitle(''))
    dispatch(changePrice(''))
    if (editedId) {
      dispatch(changeEditedId(''))
    }
  }

  return (
    <form className="form-notes">
      <input 
        type="text" 
        name="title" 
        placeholder="Наименование услуги"
        value={titleValue}
        onChange={(e) => dispatch(changeTitle(e.target.value))}
      />
      <input 
        type="text" 
        name="price" 
        placeholder="Стоимость"
        value={priceValue}
        onChange={(e) => dispatch(changePrice(e.target.value))}
      />
      <button type="button" className="btn-save" onClick={handlerSubmit}>Save</button>
      {(titleValue || priceValue ) 
        && <button 
            type="button" 
            className="btn-cancel"
            onClick={handlerCancel}
            >
          Cancel
          </button>}
    </form>
  )
}