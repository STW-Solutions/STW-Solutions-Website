import "./ButtonPrimary.css"

interface Props {
    children: string;
}

const ButtonPrimary = ({ children }: Props) => {
  return (
    <button className='btn text-white stw-btn-color text-capitalize w-100' type='button'>{children}</button>
  )
}

export default ButtonPrimary