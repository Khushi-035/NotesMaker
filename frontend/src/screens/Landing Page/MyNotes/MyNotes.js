import React from 'react'
import Mainscreen from '../../../components/Header/Mainscreen';
import { Link } from 'react-router-dom';
import { Accordion, AccordionButton, AccordionCollapse, Badge, Button, Card } from 'react-bootstrap';
import notes, {} from '../../../data/notes';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';

const MyNotes = () => {
  return (
    <Mainscreen title= "Welcome back Khushi Sachan...">
        <Link to='createnote'>
            <Button style={{marginLeft: 10, marginBottom: 6}} size='lg'>
                Create New Note
            </Button> 
          </Link>
              {notes.map((note)=> (

                <Accordion>
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
                        <AccordionButton as={Card.Text} variant="link" eventKey="0">{note.title}</AccordionButton>
                                
                            
                        
                      </span>
                      <div>
                        <Button href={`/note/${note._id}`}>Edit</Button>
                        <Button variant='danger' className='mx-2' >
                          Delete</Button>
                      </div>
                    </Card.Header>
                        <AccordionBody eventKey="0">
                            <Card.Body>
                              <h4>
                                <Badge variant='success'>
                                    Category - {note.category}
                                </Badge>
                              </h4>

                              <blockquote className="blockquote mb-0">
                                <p>
                                  {note.content}   
                                </p>
                                <footer className="blockquote-footer">
                                  Created On- Date
                                </footer>
                                </blockquote>
                            </Card.Body>
                        </AccordionBody>
                                             
                  </Card>
                </Accordion>
                
                  
                ))
              
              }

            
        
    </Mainscreen>  

  );
};

export default MyNotes
