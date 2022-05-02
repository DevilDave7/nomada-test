import { Card, Image } from "antd";
import {StarOutlined} from '@ant-design/icons'

const Movie = ({movie}) => {
  return (
    <Card style={{'margin-top':'0.5em'}}>
        <Card.Grid style={{width:'40%'}}>
            <Image src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}/>
        </Card.Grid>
        <Card.Grid style={{width:'60%'}}>
            <div className="headCard">
                <h3 style={{fontSize:'1.5em'}}>{movie.original_title}</h3>
                <h4 style={{textAlign:'right',letterSpacing:'2px'}}>
                    {`${movie.vote_average}/10`}
                    <StarOutlined style={{color:'#F5BA2A'}}/>
                </h4>
            </div>
            <h3></h3>
            <p style={{fontStyle:'italic',textAlign:'justify'}}>{movie.overview}</p>
            <b>{`Fecha de esteno: ${movie.release_date}`}</b>
        </Card.Grid>
    </Card>
  )
}

export default Movie