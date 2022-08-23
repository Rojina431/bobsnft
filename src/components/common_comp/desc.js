import { Fragment } from "react"
import '../bobs/bobs.css'
import SecondDesc from './second_des.js'


const Description = (props) => {

    return (
        <Fragment>
             <div className='main-desc'>
           <h3 className='title'>{props.maintitle}</h3>
           <p className='paragraph'>{props.maindesc}</p>
           </div>
          <SecondDesc title={props.descTitle1}
          Icon={props.descImg1}
          desc={props.desc1}/>
          <SecondDesc  title={props.descTitle2}
          Icon={props.descImg2}
          desc={props.desc2}/>
        </Fragment>
    )
}

export default Description