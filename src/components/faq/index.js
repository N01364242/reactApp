import React from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

class FAQ extends React.Component{
    state = {
        tasks: []
      };

      componentDidMount() {
        axios.get('http://localhost:5000/faqs').then(response => {
          this.setState({ tasks: response.data });
          console.log(response);
        });

      }
      render() {
        return (
          <div>
            {this.state.tasks.map(task => (
              <Task task={task} key={task._id} />
            ))}
          </div>
        );
      }
    }
    const Task = props => {
      return (
        <div className="center">
          <Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      {props.task.question}
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body> 
          <ul>
          <li> {props.task.answer}  </li>
          <li> {props.task.answer1} </li>
          <li> {props.task.answer2} </li>
         </ul>
         </Card.Body>
    </Accordion.Collapse>
  </Card>
  
</Accordion>
        </div>
      );
    };

export default FAQ;