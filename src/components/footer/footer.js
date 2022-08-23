import './footer.css'
import SocialLink from './sociallink'
import Twitter from '../../images/twitter.svg'
import Instagram from '../../images/instagram.svg'
import Discord from '../../images/discord.svg'

const FooterComponent = () => {
    return (
        <div className="main-page black-card-bg node">
          <div className="footer-grid">
             <div className='footer-column'>
                 <div className='_1-6vw-margin'>
                        <p className='footer-paragraph'>Blockchain or <br/>
                         Bust Society</p>
                    </div>
                    <div className='social-links-grid'>
                        <SocialLink img={Discord}/>
                       <SocialLink img={Twitter}/>
                       <SocialLink img={Instagram}/>
                    </div>
             </div>
          </div>
        </div>
    )
}

export default FooterComponent