import { Fragment } from "react"
import { AnimationOnScroll } from 'react-animation-on-scroll';

const TimelineItem = (props) => {

    return (
        <Fragment>
              <div className='timeline-item'>
                <div className="timeline-title">
                <h2 className='item-title'>{props.title}</h2>
                </div>
                <div className='timeline-center'>
                    <div className='timeline-circle visible'>
                    
                    </div>
                   
                </div>
                <AnimationOnScroll animateIn="animate__fadeIn">
                <div className='timeline-desc'>
                      <div className='_4-8vw-margin'>
                      <div className='timeline-text'>
                       <strong>{props.title}</strong>   
                      </div>
                      <div className='timeline-text'>
                       {props.desc}
                       </div>
                      </div>
                      <div className='timelineimage-wrap'>
                         <img src={props.image} alt="timline-img"/>
                      </div>
                </div>
                </AnimationOnScroll>
              </div>
        </Fragment>
    )
}

export default TimelineItem