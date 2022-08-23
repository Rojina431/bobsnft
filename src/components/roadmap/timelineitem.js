import { Fragment } from "react"

const TimelineItem = (props) => {
    return (
        <Fragment>
              <div className='timeline-item'>
                <h2 className='item-title'>{props.title}</h2>
                <div className='timeline-center'>
                    <div className='timeline-circle'></div>
                </div>
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
              </div>
        </Fragment>
    )
}

export default TimelineItem