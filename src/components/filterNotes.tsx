import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../redux/changeForms";
import { filterNotesArr } from "../redux/changeNotes";
import { Store } from "../types/typesNotes";

export const FilterNotes = () => {
  const dispatch = useDispatch();
  const { filterValue } = useSelector((state: Store) => state.forms);

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeFilter(e.target.value))
    dispatch(filterNotesArr(e.target.value))
  }

  const handlerClear = () => {
    dispatch(changeFilter(''))
    dispatch(filterNotesArr(''))    
  }

  return (
    <div className="filter">
      <input 
        type="text" 
        name="filter" 
        placeholder="Фильтер по наименованию"
        value={filterValue}
        onChange={handlerChange}
      />
      <button type="button" onClick={handlerClear}>Clear filter</button> 
    </div>    
  )
}