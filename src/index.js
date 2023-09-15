import './index.css';
import React from 'react';
import Quiz from './Quiz';
import ReactDOM from 'react-dom/client';

import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
<Container className='mt-3'>
  <Row>
  <Quiz
      question = '' 
      answer   = ''
      numQ     = {0}
      />
  </Row>
</Container>  
);