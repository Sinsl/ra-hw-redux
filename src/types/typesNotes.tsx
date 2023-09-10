export interface ObjectNotes {
  id: string,
  title: string,
  price: number,
}

export interface NoteProps {
  note: ObjectNotes,
  onEdited: (id: string) => void,
  onDelete: (id: string) => void,
}

export interface StateNotes {
  arrNotes: ObjectNotes[],
  filterNotes: ObjectNotes[]
}

export interface StateForm {
  titleValue: string,
  priceValue: string,
  filterValue: string,
  editedId: string
}

export interface Store {
  forms: StateForm,
  notes: StateNotes
}



export interface ActionsNotes{
  type: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any
}


export interface ActionForm {
  type: string,
  payload: string
}