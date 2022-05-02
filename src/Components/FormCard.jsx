import { Card, Col, Layout, Row, Upload } from 'antd';
import {InboxOutlined, PlayCircleOutlined} from '@ant-design/icons'
import getActor from '../Helpers/getActor';
import { getActorAction, getActorError, getActorOk } from '../app/Actions/actor.action';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import './formCard.css'


const FormCard = () => {
  const { Content } = Layout;
  const { Dragger } = Upload;

  const [{loading,actorName,error}, setActorName] = useState({
    loading:false,
    actorName:'',
    error:''
  });

  const dispatch = useDispatch();

  const getActorProccess = (payload)=>{
    setActorName(prev=>({
      ...prev,
      loading:payload
    }))
    dispatch(getActorAction(payload))
  };
  const getActorProccessOk = (payload)=>{
    setActorName(prev=>({
      ...prev,
      loading:false,
      actorName: payload
    }))
    dispatch(getActorOk(payload))
  }
  const getActorProccessError =(payload)=>{
    setActorName(prev=>(
      {...prev,
        loading:false,
        error:payload
      }

    ));
    dispatch(getActorError(payload))
  }

  const handleChange = (info)=>{
    const {status} = info.file;
    if(!info.fileList[0]) return false;
    if (status !== 'uploading') {
      getActorProccess(true);
      getActor(info.fileList[0], info.file)
        .then(({data})=>{

          console.log(data);
          if(data.error !== '')return getActorProccessError(data.error);
          getActorProccessOk(data.actorName)
        })
    }
  }

  return (
    <Layout>
      <Content>
        <Row justify='space-around' align='middle'>
          <Col span={12} >
            <div className='site-page-header-ghost-wrapper'>
              <Card 
                loading={loading}
                style={{ textAlign: 'center' }}
                title="Quien es ese actor?"
                bordered={false}
              >
                <Dragger onChange={handleChange}>
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">Haz click aqui o arrastra la imagen</p>
                  <p className="ant-upload-hint" >
                    Selecciona la foto de un actor famoso para conocer <br/>
                    quien es y en que  peliculas ha salido.
                  </p>
                </Dragger>
              </Card>
            </div>
          </Col>
        </Row>
        <Row align='center'>
          <Col span={10} >
            <h3 className='whoisName'>{actorName !== ""?actorName:error}</h3>
            {error === '' && actorName !== ''?
              <Link className='button' to={`/peliculas/${actorName}` }>Ver peliculas{' '}
              <PlayCircleOutlined />
              </Link>
            :""
          }
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}

export default FormCard