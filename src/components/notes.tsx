import './notes.css';
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { Note } from './note';
import { AddNotesForm } from './addNotesForm';
import { FilterNotes } from './filterNotes';
import { SyntheticEvent, useEffect, useState } from 'react';
import { ObjectNotes } from '../types/typesNotes';
import { Store } from '../types/typesNotes';
import { changeTitle, changePrice, changeEditedId } from "../redux/changeForms";
import { addNoteArr, removeNoteArr, changeNoteArr, filterNotesArr } from '../redux/changeNotes';

export const Notes = () => {
  const dispatch = useDispatch();
  const { arrNotes, filterNotes } = useSelector((state: Store) => state.notes);
  const { titleValue, priceValue, filterValue, editedId } = useSelector((state: Store) => state.forms);
  const [arrWorks, setArrWorks] = useState(arrNotes);

  // обновление записей находясь в фильтрации
  const updatefilterArr = () => {
    if(filterValue) {
      dispatch(filterNotesArr(filterValue));
    }
  }

  const onHandlerSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (editedId) {
      dispatch(changeNoteArr({id: editedId, title: titleValue, price: priceValue}));      
    } else {
      dispatch(addNoteArr({id: uuid(), title: titleValue, price: priceValue}))
    }
    dispatch(changeTitle(''));
    dispatch(changePrice(''));
    updatefilterArr();
  }

  const handlerEdited = (id: string) => {
    const elem = arrNotes.find((item: ObjectNotes) => item.id === id);
    if (elem) {
      dispatch(changeTitle(elem.title));
      dispatch(changePrice(String(elem.price)));
      dispatch(changeEditedId(id));
      updatefilterArr();
    }
    
  }

  const handletDelete = (id: string) => {
    if(editedId) {
      dispatch(changeTitle(''));
      dispatch(changePrice(''));
      dispatch(changeEditedId(''));
    }
    dispatch(removeNoteArr(id));
    updatefilterArr();
  }

  useEffect(() => {
    filterValue ? setArrWorks(filterNotes) : setArrWorks(arrNotes);
  }, [filterValue, arrNotes, filterNotes]);

  return (
    <div className="notes">
      <AddNotesForm handlerSubmit={onHandlerSubmit}/>
      <FilterNotes />
      <div className="notes-list">
        {arrWorks.map((item: ObjectNotes) => 
          <Note 
            key={item.id} 
            note={item} 
            onEdited={handlerEdited}
            onDelete={handletDelete}
          />
        )}
      </div>      
    </div>
  )
}
