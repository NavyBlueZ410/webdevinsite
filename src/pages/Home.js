import React from 'react'
import Navbar from '../components/Navbar'
import imgHeder from '../assets/imgHeader.svg'
import imgSkill from '../assets/imgSkill.svg'
import imgAbout from '../assets/imgAbout.svg'
import styles from './css/Home.module.css'
import Typewriter from 'typewriter-effect';
import CardSkill from '../components/CardSkill';
import { FaReact,FaPhp,FaHtml5,FaCss3,FaJsSquare } from "react-icons/fa";
import { BsFiletypeSql,BsGithub,BsMapFill } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import Vertical from '../components/Vertical'
import CardPackgate from '../components/CardPackgate'
import Input from '../components/Input'
import TextArea from '../components/TextArea'

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
                <h1 className={styles.titleAbout}>Title</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  </p>
                <button className={styles.buttonReadMore}>Read More...</button>
            </div>
            <div className={styles.aboutRight}>
                <img src={imgAbout} alt='' />
            </div>
          </div>
          <div className={styles.contactContent}>
            <div className={styles.leftContect}>
                <h1>Contact</h1>
                <div className={styles.boxTextContact}>
                    <div className={styles.logoContentContect}>
                      <BsMapFill className={styles.logoContect}/>
                    </div>
                    <span>9 / 99 หมู่ 9 ต.ท่าโพธิ์ อ.เมือง จ.พิษณุโลก 65000</span>
                </div>
            </div>
            <div className={styles.rightContact}>
              <h1>Send a Message</h1>
              <div className={styles.boxInputName}>
                <Input placeholder={"FirstName"}/>
                <Input placeholder={"LastName"}/>
              </div>
              <Input placeholder={"Email"}/>
              <TextArea placeholder={"Detail....."}/>
            </div>                 
          </div>     
        </div>
    </>
  )
}

export default Home