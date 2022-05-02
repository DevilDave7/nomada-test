
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { Layout,Image } from "antd"
import { ArrowLeftOutlined } from '@ant-design/icons'

import GetMovies from "../Helpers/getMovies";

import {
    getMoviesAction,
    getMoviesOk,
    getMoviesError
} from '../app/Actions/movies.action'

import Movie from "./Movie";
import './peliculas.css';

const { Content, Sider } = Layout;

const Movies = () => {

    let {actorName} = useParams();
    const previousValues = useRef({actorName});
    const [actor, setActor] = useState({
        actorName,
        gender:'',
        popularity:'',
        imgProfile: '',
        movies:[]
    })

    const dispatch = useDispatch();

    const getMoviesProcess = (payload)=> dispatch(getMoviesAction(payload));

    const getMoviesProcessOk = (payload)=>{
        setActor(prev=>({
            ...prev,
            gender: payload.gender,
            popularity: payload.popularity,
            imgProfile: payload.profile_path,
            movies: payload.known_for
        }))
        dispatch(getMoviesOk(payload.known_for))
    };

    const getMoviesProcessErr = (payload)=>dispatch(getMoviesError(payload));


    useEffect(() => {
        if (
          previousValues.actorName !== actorName
        ) {
            getMoviesProcess(true);
            GetMovies(actorName)
                .then(data=>{
                    console.log(data.length)
                    if(data.length !== 0){
                        getMoviesProcessOk(data[0]);
                    }else{
                        getMoviesProcessErr('Sin resultado de peliculas');
                    }
                }).catch(err=>console.error(err));
            previousValues.actorName = actorName;
        }
      },[actorName]);
    
  return (
    <>
    <Layout style={{ minHeight: '100vh',backgroundColor:'blueviolet'}} hasSider>
        <Sider className="sideActor">
            <Link to="/" className="toHome">
                <ArrowLeftOutlined className="toHomeIcon"/>
                {' '}Regresar
            </Link>
            <Image
                src={`https://image.tmdb.org/t/p/w300${actor.imgProfile}`}
                width={180}
                className="imageProfile"
            />
            <h3 style={{fontWeight:800,marginTop:'0.5rem'}}> { actor.actorName }</h3>
            { actor.gender === 2 ? <p className="genderP">Hombre</p> : <p className="genderP">Mujer</p> }
            <p className="popularityP">Popularidad: {actor.popularity}</p>
        </Sider>
        <Layout className="site-layout">
            <Content style={{ margin: '0 20px', overflow:'initial'}}>
                <h3 className="titleContent">Peliculas...</h3>
                <hr />
                {
                    actor.movies.map((movie,index)=>(<Movie key={index} movie={movie}/>))
                }
            </Content>
            </Layout>
    </Layout>
    </>
  )
}

export default Movies