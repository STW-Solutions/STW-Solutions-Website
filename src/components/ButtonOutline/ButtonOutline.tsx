import './ButtonOutline.css'

interface Props {
    children: string;
}

const ButtonOutline = ({ children }: Props) => {
  return (
    <button className='btn text-dark stw-btn-outline text-capitalize w-100' type='button'>{children}</button>
  )
}

export default ButtonOutline