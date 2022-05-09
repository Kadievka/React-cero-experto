import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { FetchGifsStateInterface } from '../interfaces/FetchGifsStateInterface';
import PropTypes from 'prop-types';

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
      <h3 data-testid="h3-element" className="animate__animated animate__fadeIn"> { category } </h3>

      { loading && <p data-testid="p-element" className="animate__animated animate__flash" >Loading...</p> }

      <div data-testid="div-element" className="card-grid">
          {
            images.map((image) => (
              <GifGridItem key={image.id} {...image}/>
            ))
          }
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}

export default GifGrid