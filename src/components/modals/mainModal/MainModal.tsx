import { useEffect, useState } from 'react'
import Bounce from "react-reveal/Bounce";
import './mainModal.scss'

interface Props {
    showModal: boolean;
    setShowModal?: any;
    children?: any;
    calssName ?: string
    isProcessing ?: boolean
  }

export default function MainModal({showModal, setShowModal, children, calssName,isProcessing}:Props) {
    const [isStart, setIsStart] = useState(false);
    
    useEffect(() => {
      if (showModal) {
        setTimeout(() => {
          setIsStart(true);
        }, 100);
      }
    }, [setIsStart, showModal]);

    const onClose = () => {
      setIsStart(false);
      setTimeout(() => {
        setShowModal(false);
      }, 800);
    };

    useEffect(() => {
      if(!isProcessing){
        setIsStart(false);
        setTimeout(() => {
          setShowModal(false);
        }, 800);
      }
    }, [isProcessing, setIsStart, setShowModal]);
    
    const cloaseHandle = (e: any) => {
        if (e.target.className.includes("main_modal")) {
            onClose();
        }
      };
  return (
    <div className={showModal === true ? "main_modal active" : "main_modal"} onMouseDown={(e) => {cloaseHandle(e)}}>
      <Bounce opposite when={isStart}>
        <div className={`${calssName} modelContent`} style={{backgroundImage : `url("/assets/imgs/modal_bg_01.png")`}}>
          <div className = "modal__close"  onClick={onClose} style={{backgroundImage : `url("/assets/imgs/button_03.png")`}}></div>
          {children}
        </div>
      </Bounce>
    </div>
  )
}
