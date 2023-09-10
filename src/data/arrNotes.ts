import { v4 as uuid } from 'uuid';
import { ObjectNotes } from '../types/typesNotes';


export const arrNotes: ObjectNotes[] = [
  {
    id: uuid(),
    title: 'Замена стекла',
    price: 21000
  },
  {
    id: uuid(),
    title: 'Замена дисплея',
    price: 25000
  },
  {
    id: uuid(),
    title: 'Замена аккумулятора',
    price: 4000
  },
  {
    id: uuid(),
    title: 'Замена микрофона',
    price: 2500
  },
  {
    id: uuid(),
    title: 'Замена гнезда зарядки',
    price: 1300
  },
  {
    id: uuid(),
    title: 'Замена шлейфа кнопки включения',
    price: 1200
  },
  {
    id: uuid(),
    title: 'Замена шлейфа громкости',
    price: 1500
  },
  {
    id: uuid(),
    title: 'Ремонт цепи питания',
    price: 5000
  },
  {
    id: uuid(),
    title: 'Восстановление ПО',
    price: 3000
  },
]