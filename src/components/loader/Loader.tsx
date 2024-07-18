import './loader.scss';
export default function Loader(props) {
  const {isLoading} = props;
  return (
    <div className='loader-div' style={{ opacity : isLoading ? 1 : 0, zIndex : isLoading ? 999 : -1}}>
      <div className="spinner-box" >
          <div className="three-quarter-spinner"></div>
      </div>
    </div>    
    
  )
  
}
