import "./ButtonPrimary.css"

interface Props {
    children: string;
    classes: string[];
    onButtonClick?: () => void;
}

const ButtonPrimary = ({ children, classes, onButtonClick }: Props) => {
  return (
    <button className={'btn text-white stw-btn-color ' + classes.join(' ')} type='button' onClick={onButtonClick}>{children}</button>
  )
}

export default ButtonPrimary