import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import React from 'react';
import { Image } from "react-bootstrap";


function Quiz(props){

    const imageURL = "https://www.cashapona.com/wp-content/uploads/2019/04/img2.jpg";

    //Hook para actualizar el criterio que despliega el componente de la pregunta
    const [numQ, setNumQ] = useState(props.numQ);

    //Actualiza las preguntas con base en su criterio
    const renderQuestion = () =>{ 
        if(numQ == 0) return("Quiz Time!");
        else if(numQ == 1) return("¿Cómo se define un nuevo componente en React?");
        else if(numQ == 2) return("¿Cómo se define un nuevo estado?");
        else if(numQ == 3) return("Seleccione Falso o Verdadero: \n El inicializador de estado puede ser una función.");
        else if(numQ == 4) return("¿Qué es Virtual DOM?");
        else return ("¡El quiz ha terminado!");
     };

     const renderAnswer = () =>{
        if(numQ == 0) return("Hoy vamos a hacer un Quiz sobre React y useEffect");
        else if(numQ == 1) return("Para crear nuevos componentes, la manera más común es por medio de componentes funcionales (definir componentes por medio de funciones). Por convención, la función lleva por nombre el nombre del componente iniciando con la primer letra en mayúscula.");
        else if(numQ == 2) return("Para definir un nuevo estado usamos un Hook de estado. En React, requerimos de la librería useState. bajo la sintaxix 'const [variable, setVariable] = useState(props.variable)' instanciamos el nuevo estado, donde variable corresponde a la variable de estado, setVariable a la función que actualizará el estado.");
        else if(numQ == 3) return("Verdadero");
        else if(numQ == 4) return(<Image src= {imageURL} thumbnail/>);
        else return ("¡Gracias por ver, feliz día!");
     };

    //Actualiza a la pregunta siguiente
    const forwardNumQ = () => { 
        if(numQ < 5){setNumQ( numQ + 1 );};
     };
    
    //Actualiza a la pregunta previa
    const backwardNumQ = () => { 
        if(numQ > 0){setNumQ( numQ - 1 ); };
    };

    //Reinicia el criterio y, por tanto, el quiz
    const handleReset = () => { setNumQ(0); }

    return(
        <Container>
            <Col>
            <Row>
                <ButtonGroup>
                <Button variant="primary" onClick={handleReset}>Reiniciar</Button>
                <Button variant="warning" onClick={backwardNumQ}>Pregunta Anterior</Button>
                <Button variant="success" onClick={forwardNumQ}>Siguiente Pregunta</Button>
                </ButtonGroup>
            </Row>
            <h1>{renderQuestion()}</h1>
            <p>{renderAnswer()}</p>
        </Col>
        </Container>
    )
};

export default Quiz;
