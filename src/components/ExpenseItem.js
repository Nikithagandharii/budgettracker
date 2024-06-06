import React, { useContext } from "react";
import {TiDelete} from 'react-icons/ti';
import Badge from 'react-bootstrap/Badge';
import { AppContext } from "../context/AppContext";
import ListGroup from 'react-bootstrap/ListGroup';
const ExpenseItem = (props) => {
    const {dispatch} = useContext(AppContext);
    const handleDeleteExpense = () => {
       dispatch({
        type: 'DELETE_EXPENSE',
        payload: props.id,
       })
    } 
    return (
      <ListGroup><ListGroup.Item className='list-group-item d-flex justify-content-between align-items-center'>
    {props.name}
    <div>
   <span className="mr-3"><Badge bg="primary">${props.cost}</Badge></span>
       
      
        <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
    </div>
        </ListGroup.Item>
        </ListGroup>
    );
};
export default ExpenseItem;