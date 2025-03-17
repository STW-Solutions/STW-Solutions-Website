import './ButtonOutline.css'

interface Props {
    children: string;
    classes: string[];
}

const ButtonOutline = ({ children, classes }: Props) => {
  return (
    <button className={'btn text-dark stw-btn-outline text-capitalize '+ classes.join(' ')} type='button'>{children}</button>
  )
}

export default ButtonOutline