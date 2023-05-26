import React from 'react'
import Mainscreen from '../../../components/Header/Mainscreen';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import notes, {} from '../../../data/notes';

const MyNotes = () => {
  return (
    <Mainscreen title= "Welcome back Khushi Sachan...">
        <Link to='createnote'>
            <Button style={{marginLeft: 10, marginBottom: 6}} size='lg'>
                Create New Note
            </Button> 
          </Link>
              {notes.map(note=> (
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
                        {note.title}
                      </span>
                      <div>
                        <Button href={`/note/${note._id}`}>Edit</Button>
                        <Button variant='danger' className='mx-2' >
                          Delete</Button>
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <blockquote className="blockquote mb-0">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                            posuere erat a ante.{' '}
                        </p>
                        <footer className="blockquote-footer">
                          Someone famous in <cite title="Source Title">Source Title</cite>
                        </footer>
                      </blockquote>
                    </Card.Body>
                  </Card>
    
                ))
              
              }

            
        
    </Mainscreen>  

  );
};

export default MyNotes
