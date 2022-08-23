import {IoMdHelpCircle} from 'react-icons/io';
import {FaDollarSign} from 'react-icons/fa';
import {MdGroups} from 'react-icons/md';

function Footer(){
    return(
        <div>
            <button><IoMdHelpCircle/></button>
            <button><FaDollarSign/></button>
            <button></button>
            <button><MdGroups/></button>
        </div>
    )
}
export default Footer;