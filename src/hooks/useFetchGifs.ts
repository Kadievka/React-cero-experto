import { getGifs } from './../helpers/getGifs';
import { useEffect, useState } from "react"
import { FetchGifsStateInterface } from '../interfaces/FetchGifsStateInterface';

/**Esto ya es un Hook, mientras no usemos jsx o tsx
export const useFetchGifs = () => {
}*/

export const useFetchGifs = (category: string): FetchGifsStateInterface => {
  const [state, setState] = useState<FetchGifsStateInterface>({
    data: [],
    loading: true
  });

  useEffect( () => {

    getGifs(category).then((images)=>{
      setTimeout(() => {
        setState({
          data: images,
          loading: false
        });
      }, 1000);
    });

  }, [category])

  return state;
}

