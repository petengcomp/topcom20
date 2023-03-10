import Link from 'next/link';
import { useEffect, useState } from 'react'
import { FiMenu } from 'react-icons/fi';
import styles from '../styles/components/Navbar.module.css'

interface NavBarProps {
  fromParentSelected: number
}

export function Navbar({fromParentSelected}:NavBarProps){

  const [ selected, setSelected ] = useState<number>(fromParentSelected);
  const [ scroll, setScroll ] = useState<number>(0);
  const [ menuIsCollapsed, setMenuIsCollapsed ] = useState<boolean>(false);

  useEffect(()=>{
    if (typeof(window)!='undefined'){
      document.addEventListener('scroll', ()=>setScroll(window.scrollY), { passive: true });
    }
  },[])

  return (
    <ul 
      className={styles.navbarContainer} 
      style={scroll>100?{borderBottom: '1px solid var(--quinquernary)'}:{}}
      id={menuIsCollapsed?styles.collapsed:""}
      >

      <div
        className={styles.hamburger}
        onClick={()=>setMenuIsCollapsed(!menuIsCollapsed)}>
        
          <FiMenu />
      </div>

      <Link href={'/'}><li id={selected==1?styles.selected:""} onClick={()=>setSelected(1)}>INÍCIO</li></Link>
      <Link href={'/inscriptions'}><li id={selected==2?styles.selected:""} onClick={()=>setSelected(2)}>INSCRIÇÃO</li></Link>
      <Link href={'/history'}><li id={selected==4?styles.selected:""} onClick={()=>setSelected(4)}>HISTÓRICO</li></Link>
      {/* <Link href={'/certifications'}><li id={selected==3?styles.selected:""} onClick={()=>setSelected(3)}>CERTIFICADOS</li></Link> */}
      {/* <Link href={'/results'}><li id={selected==5?styles.selected:""} onClick={()=>setSelected(5)}>RESULTADOS</li></Link> */}
      {/* <Link href={'/teams'}><li id={selected==6?styles.selected:""} onClick={()=>setSelected(6)}>EQUIPES</li></Link> */}
      <Link href={'/sponsor'}><li id={selected==7?styles.selected:""} onClick={()=>setSelected(7)}>PATROCÍNIO</li></Link>
    </ul>
  )
}