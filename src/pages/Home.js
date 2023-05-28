import React from 'react'
import Navbar from '../components/Navbar'
import imgHeder from '../assets/imgHeader.svg'
import imgSkill from '../assets/imgSkill.svg'
import imgAbout from '../assets/imgAbout.svg'
import styles from './css/Home.module.css'
import Typewriter from 'typewriter-effect';
import CardSkill from '../components/CardSkill';
import { FaReact,FaPhp,FaHtml5,FaCss3,FaJsSquare } from "react-icons/fa";
import { BsFiletypeSql,BsGithub } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import Vertical from '../components/Vertical'
import CardPackgate from '../components/CardPackgate'

function Home() {
  return (
    <>
        <Navbar/>
        <div className={styles.contentHeader}>
          <img src={imgHeder} alt='' />
          <div className={styles.boxHeader}>
            <h1>Welcome to<br/> My Website DevInsite</h1>
            <h3>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay:30,
                strings:["We are Programer.","We are Developer."]
              }}
            />
            </h3>
          </div>
        </div>
        <div className='container'>
            <h1 className={styles.titleSkill}>Skill</h1>
            <div className={styles.contentCard}>
              <CardSkill icon={<FaHtml5/>} text={"Html"}/>
              <CardSkill icon={<FaCss3/>} text={"Css"}/>
              <CardSkill icon={<FaJsSquare/>} text={"Js"}/>
              <CardSkill icon={<FaReact/>} text={"React"}/>
              <CardSkill icon={<FaPhp/>} text={"Php"}/>
              <CardSkill icon={<BsFiletypeSql/>} text={"Sql"}/>
              <CardSkill icon={<BsGithub/>} text={"GitHup"}/>
              <CardSkill icon={<FiFigma/>} text={"Figma"}/>
            </div>
            <div className={styles.imgContentCard}>
              <img src={imgSkill} alt='' />
            </div>
          <h1 className={styles.titleSkill}>Workflow</h1>
          <Vertical/>
          <h1 className={styles.titleSkill}>Packgate</h1>
          <div className={styles.contentCardPackgate}>
            <CardPackgate/>
            <CardPackgate/>
            <CardPackgate/>
          </div>
          <h1 className={styles.titleSkill}>About</h1>
          <div className={styles.contentAbout}>
            <div className={styles.aboutLeft}>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
            </div>
            <div className={styles.aboutRight}>
                <img src={imgAbout} alt='' />
            </div>
          </div>
        </div>
    </>
  )
}

export default Home