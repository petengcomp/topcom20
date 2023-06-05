import React, { useEffect, useState } from "react";
import styles from  "/styles/components/ScrollUpButton.module.css"
import { FiArrowUp } from 'react-icons/fi'

interface ScollUpButtonProps {
  scroll?: number
}

export default function ScrollUpButton({scroll}:ScollUpButtonProps){
  
  const [ pageScrollPosition, setPageScrollPosition ] = useState<number>(0)
  
  function scrollUp(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(()=>{
    if (!scroll) {
      window.addEventListener("scroll", (e:Event) => {
        if (e.currentTarget) {
          setPageScrollPosition((e.currentTarget as Window).scrollY)
        }
      })  
    } else setPageScrollPosition(scroll)
  }, [])


  return(
    <div className={styles.main_scroll_button} style={pageScrollPosition>=100?{}:{opacity:0}}>
      <div className={styles.container_scroll_button} onClick={scrollUp}>
        <FiArrowUp size={25} color={'var(--dark_blue)'} />
      </div>     

      <div className={styles.description_scroll_button}>
        <p>Ir para o início da página</p>
      </div>
    </div>
  )
}