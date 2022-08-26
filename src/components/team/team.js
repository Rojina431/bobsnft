import TeamImg from '../../images/team1.png'
import './team.css'

const TeamComponent = () => {
    return (
        <div className="right-margin node main-page">
           <div className="card-text-wrap">
             <div className="_3.2vw-margin">
                 <h3 className="h3-title">
                 MEET THE TEAM
                 </h3>
                 <p className="medium-paragraph">
                   Our team has been very focused on bringing you one of the best NFT projects in the Metaverse. Now comes the time to introduce ourselves.
                 </p>
             </div>
           </div>
           <div>
                 <img src={TeamImg} alt="teamimg" width="100%"/>
             </div>
        </div>
    )
}

export default TeamComponent