
import {useSelector} from "react-redux";
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from "react-bootstrap";
import "./scss/App.scss";
import TaskList from './TaskList';
import TaskForm from './TaskForm';

function App() {
const taskState=useSelector(state=> state.task);
console.log(taskState);

  return (
    <div className="App">
    <Container>
      <Row>
        <Col md={4} lg={4} >   <TaskForm></TaskForm></Col>
        <Col md={8} lg={6} > <TaskList></TaskList></Col>
      </Row>
    </Container>
     
   
    </div>
  );
}

export default App;
