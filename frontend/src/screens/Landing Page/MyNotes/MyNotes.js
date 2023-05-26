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
        </Link>
    </Mainscreen>  
    
  );
};

export default MyNotes
