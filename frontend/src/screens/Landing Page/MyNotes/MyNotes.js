import React from 'react'
import Mainscreen from '../../../components/Header/Mainscreen';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

const MyNotes = () => {
  return (
    <Mainscreen title= "Welcome back Khushi Sachan...">
        <Link to='createnote'>
            <Button style={{marginLeft: 10, marginBottom: 6}} size='lg'>
                Create New Note
            </Button> 
            <Card style={{margin: 10}}>
                <Card.Header style={{display: "flex"}}>
                  <span
                    style={{
                      color: "black",
                      textDecoration: "none",
                      flex: 1,
                      cursor: "pointer",
                      alignSelf: "center",
                      fontSize: 18,
                    }}
                  >
                    title
                  </span>
                  <div>
                    <Button>Edit</Button>
                    <Button variant='danger' className='mx-2'>Delete</Button>
                  </div>
                </Card.Header>
              </Card>

        </Link>
    </Mainscreen>  

  );
};

export default MyNotes
