import {
  CHANGE_FORM_TITLE,
  CHANGE_FORM_PRICE,
  CHANGE_FILTER_VALUE,
  CHANGE_EDITED_ID
} from "./actions";

export const changeTitle = (value: string) => {
  console.log('func changeTitle')
  return {
    type: CHANGE_FORM_TITLE,
    payload: value,
  }
};

export const changePrice = (value: string) => {
  console.log('func changePrice')
  return {
    type: CHANGE_FORM_PRICE,
    payload: value,
  }
};

export const changeFilter = (value: string) => {
  console.log('func changeFilter')
  return {
    type: CHANGE_FILTER_VALUE,
    payload: value,
  }
};

export const changeEditedId = (value: string) => {
  console.log('func changeEditedId')
  return {
    type: CHANGE_EDITED_ID,
    payload: value,
  }
};
