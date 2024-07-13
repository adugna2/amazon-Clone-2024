import classes from '../Header/css/Header.module.css'
import {AiOutlineMenu}from 'react-icons/ai';
function LowerHeader(){
    return(
  <div >
<ul className={classes.lower_container}>
    <li>
    <p>{<AiOutlineMenu/>} {" "}All</p>

    </li>
    <li> Today Deals</li>              
    <li> Coustermer Service</li>
    <li> Registary</li>
    <li> gift cards</li>
    <li> Sell</li>
</ul>
    </div>
    )

}




export default LowerHeader