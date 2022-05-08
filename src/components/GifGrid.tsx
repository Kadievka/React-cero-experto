import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { FetchGifsStateInterface } from '../interfaces/FetchGifsStateInterface';

export interface GifGridPropsInterface {
  category: string
}

const GifGrid = ({category}: GifGridPropsInterface) => {

  /* const [images, setImages] = useState<ImageInterface[]>([]);

  useEffect(() => {
    getGifsService(category).then((gifs: ImageInterface[])=>{
      setImages(gifs);
    });
  }, [category]); */

  const { data: images, loading }: FetchGifsStateInterface = useFetchGifs(category);


  return (
    <>
      <h3>{category}</h3>

      { loading && <p>Loading...</p> }

      <div className="card-grid">
          {
            images.map((image) => (
              <GifGridItem key={image.id} {...image}/>
            ))
          }
      </div>
    </>
  )
}

export default GifGrid