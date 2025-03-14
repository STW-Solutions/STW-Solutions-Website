import "./ButtonPrimary.css"

interface Props {
    children: string;
    classes: string[];
}

const ButtonPrimary = ({ children, classes }: Props) => {
  return (
    <button className={'btn text-white stw-btn-color text-capitalize ' + classes.join(' ')} type='button'>{children}</button>
  )
}

export default ButtonPrimary