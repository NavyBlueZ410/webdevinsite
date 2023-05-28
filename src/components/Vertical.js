import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BiNotepad } from "react-icons/bi";
import styles from './css/Vertical.module.css'
import imgVertical from '.././assets/imgVertical.svg'

function Vertical() {
  return (
    <div>
    <VerticalTimeline lineColor='#000'>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="ชั้นตอนที่ 1"
            iconStyle={{ background: '#FF6000', color: '#fff' }}
            icon={<BiNotepad />}
            contentStyle={{ background: '#f3f2f2', color: '#454545' }}
            contentArrowStyle={{ borderRight: '7px solid  #f3f2f2' }}
        >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
            <p>
            User Experience, Visual Design
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="ชั้นตอนที่ 2"
            iconStyle={{ background: '#FF6000', color: '#fff' }}
            icon={<BiNotepad />}
            contentStyle={{ background: '#f3f2f2', color: '#454545' }}
            contentArrowStyle={{ borderRight: '7px solid  #f3f2f2' }}
        >
            <h3 className="vertical-timeline-element-title">Art Director</h3>
            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
            <p>
            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
            </p>
        </VerticalTimelineElement>
    </VerticalTimeline>
    <div className={styles.imgContentVertical}>
        <img src={imgVertical} alt='' />
    </div>
    </div>
  )
}

export default Vertical