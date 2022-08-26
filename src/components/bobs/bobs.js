import BobsImg from '../../images/bob.png'
import FirstIcon from '../../images/icon1.png'
import SecondIcon from '../../images/icon.png'
import './bobs.css'
import Description from '../common_comp/desc'

const BobsComponent = () => {
    return (
        <div className="main-page bobs-main node right-margin">
         <h5 className='card-number-hide'>01</h5>
         <div className='bobs-img'>
             <img src={BobsImg} alt="bobs"/>
         </div>
         <div className='bobs-desc'>
         <h5 className='card-number'>01</h5>

          
           <Description maintitle="5000 unique BOBS"
           maindesc="Blockchain or Bust is a collection of 5,000 unique and collectable Non-Fungible Tokens. Each are ERC 721 standard tokens, and you can find them residing from the 
           big city to the deep forest region of the Ethereum Blockchain."
           descImg1={FirstIcon}
           descTitle1="1/1 unique NFTs"
           desc1="Each BOB is completely unique. Though some might share traits, no BOB is exactly the same."
           descImg2={SecondIcon}
           descTitle2="Over 250 properties"
           desc2="BOBS are made up of over 200 different hand drawn properties, from crowns and smiles to glasses and frowns. "/>
           {/* <div className='main-desc'>
           <h3 className='title'>5000 unique BOBS</h3>
           <p className='paragraph'>Blockchain or Bust is a collection of 5,000 unique and collectable Non-Fungible Tokens. Each are ERC 721 standard tokens, and you can find them residing from the 
           big city to the deep forest region of the Ethereum Blockchain.</p>
           </div>
           <div className='desc'>
               <div className='desc-img'>
               <img src={FirstIcon} alt="icon1"/>
               </div>
               <div className='desc-text'>
                   <h6>1/1 unique NFTs</h6>
                   <p>Each BOB is completely unique. Though some might share traits, no BOB is exactly the same.</p>
               </div>
           </div>
           <div className='desc'>
               <div className='desc-img'>
               <img src={SecondIcon} alt="icon2"/>
               </div>
               <div className='desc-text'>
                   <h6>1/1 unique NFTs</h6>
                   <p>Each BOB is completely unique. Though some might share traits, no BOB is exactly the same.</p>
               </div>
           </div> */}
         </div>
        </div>
    )
}

export default BobsComponent