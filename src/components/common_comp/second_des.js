import '../bobs/bobs.css'

const SecondDesc = (props) => {
    return (
       <div className='desc'>
       <div className='desc-img'>
       <img src={props.Icon} alt="icon1"/>
       </div>
       <div className='desc-text'>
           <h5>{props.title}</h5>
           <p className='medium-paragraph'>{props.desc}</p>
       </div>
   </div>
    )
   }

   export default SecondDesc