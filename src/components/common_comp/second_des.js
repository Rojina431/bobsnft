import '../bobs/bobs.css'

const SecondDesc = (props) => {
    return (
       <div className='desc'>
       <div className='desc-img'>
       <img src={props.Icon} alt="icon1"/>
       </div>
       <div className='desc-text'>
           <h6>{props.title}</h6>
           <p>{props.desc}</p>
       </div>
   </div>
    )
   }

   export default SecondDesc