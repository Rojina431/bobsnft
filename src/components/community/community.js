import CommunityImage from '../../images/community.png'
import './community.css'
import '../bobs/bobs.css'
import FirstIcon from '../../images/icon1.png'
import SecondIcon from '../../images/icon.png'
import Description from '../common_comp/desc'

const CommunityComponent = () => {
    return (
        <div className="main-page left-margin node">
        <div className='bobs-img'>
            <img src={CommunityImage} alt="communityimg"/>
        </div>
        <div className='bobs-desc'>
          <Description maintitle="Community focused"
           maindesc="BOBS were founded with the intent of building a community like no other. "
           descImg1={FirstIcon}
           descTitle1="Incredible ownership benefits"
           desc1="Merchandise, Tournament-Style games with incredible prizes, and monthly dividend payments are all benefits included from holding a BOB. "
           descImg2={SecondIcon}
           descTitle2="You decide our future"
           desc2="In order to show just how much we value our community, we want your help in deciding what's next. BOBcoins? The Bobaverse? You tell us!"/>
          </div>
          </div>
    )
}

export default CommunityComponent