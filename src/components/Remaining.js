import React,{useContext} from "react";
import { AppContext } from "../context/AppContext";
const Remaining = () => {
    const {  expenses, budget } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger p-4' : 'alert-success p-4';
    return(
        <div className={`alert ${alertType}`}>
            <span>
                Remaining:  ${budget - totalExpenses}
            </span> 
             
        </div>
    )
};
export default Remaining;