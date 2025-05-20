import { Link } from 'react-router';
import './ButtonOutline.css'

interface Props {
    children: string;
    classes: string[];
    to: string
}

const ButtonOutline = ({ children, classes, to }: Props) => {
  return (
    <Link to={to} className={'btn text-dark stw-btn-outline text-capitalize '+ classes.join(' ')} type='button'>{children}</Link>
  )
}

export default ButtonOutline