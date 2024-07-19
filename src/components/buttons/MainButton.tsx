import './button.scss'
type PropsType = {
    handleClick ?: any;
    label ?: any
    className ?: string
  };
export default function MainButton({handleClick, label, className}:PropsType) {

  return (
    <button className={`main-button ${className}`} onClick={handleClick}>
      <span>{label}</span>
    </button>
  )
}
