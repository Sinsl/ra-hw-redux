import {
  ADD_NOTE_ARR,
  REMOVE_NOTE_ARR,
  CHANGE_NOTE_ARR,
  FITLER_NOTE_ARR
} from './actions';

import { ActionsNotes} from "../types/typesNotes";


export const addNoteArr = (value: {id: string, title: string, price: string}): ActionsNotes => {
  let num = 0;
  if (value.price) {
    num = isNaN(parseInt(value.price)) ? 0 : parseInt(value.price);
  }
  return {
    type: ADD_NOTE_ARR,
    payload: {id: value.id, title: value.title, price: num},
  }
};

export const removeNoteArr = (value: string): ActionsNotes => {
  return {
    type: REMOVE_NOTE_ARR,
    payload: value,
  }
};

export const changeNoteArr = (value: {id: string, title: string, price: string}): ActionsNotes => {
  let num = 0;
  if (value.price) {
    num = isNaN(parseInt(value.price)) ? 0 : parseInt(value.price);
  }
  return {
    type: CHANGE_NOTE_ARR,
    payload: {id: value.id, title: value.title, price: num},
  }
};

export const filterNotesArr = (value: string): ActionsNotes => {
  return {
    type: FITLER_NOTE_ARR,
    payload: value.toLowerCase(),
  }
};
