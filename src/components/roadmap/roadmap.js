import './roadmap.css'
import TimelineFirst from '../../images/roadmapfirst.png'
import TimelineSecond from '../../images/roadmapsecond.png'
import TimelineBobFirst from '../../images/nineth.png'
import TimelineBobSecond from '../../images/eighth.png'
import TimelineThird from '../../images/roadmapthird.jpeg'
import TimelineFourth from '../../images/roadmapfourth.png'
import TimelineFifth from '../../images/roadmapfifth.png'

import TimelineItem from './timelineitem'

const RoadMapCompnent = ()  => {
    return (
        <div className="node white-bg-card">
            <div className="large-card">
             <div className="text-wrap">
                <div className="title-div _2-4vw-margin">
                    <h2 className="title-h2">THE ROADMAP</h2>
                </div>
                <p className="large-paragraph">We are very proud of our roadmap, and can't wait to see it come to fruition. We have built it so holders will recieve numerous benefits including 
                    monthly dividend style payments and the chance to win incredible prizes!</p>
                
             </div>
            </div>
            <div className='timeline-wrap'>
             <div className='timeline-progress'>
                <div className='timeline-progress-bar'></div>
              </div>
             
               <TimelineItem 
               title="WHITELIST MINT"
               desctitle="WHITELIST MINT"
               desc="2000 whitelist spots will be given out. Whitelist spots will guarantee early access to BOBS. Minting will take place on this website. You will also be able to compete in our first BOB Game to earn your whitelist spot."
               image={TimelineFirst}
               />
               <TimelineItem 
               title="PUBLIC MINT"
               desctitle="PUBLIC MINT"
               desc="BOBS public mint will begin on August 15th. Minting will take place on this website. "
               image={TimelineSecond}
               />
                <TimelineItem 
               title="10% MINTED:
               BUMPIN' BOBS"
               desctitle="BUMPIN' BOBS"
               desc="Bumpin' BOBS is a 24/7 radio station that features lofi music for everyone to enjoy, and will be streaming on YouTube."
               image={TimelineBobFirst}
               />
               <TimelineItem 
               title="20% MINTED:
               MERCHANDISE
               "
               desctitle="MERCHANDISE"
               desc="Generic merchandise with BOB logos will be made available for everyone, and customizable chains, shirts, and hoodies will be made available for holders."
               image={TimelineBobSecond}
               />
                <TimelineItem 
               title="50% MINTED:
               JAILBREAK"
               desctitle="JAILBREAK"
               desc="50 one of one BOBS will be randomly sent to holders. These BOBs were held back from the original mint, and will be inspired by pop-culture icons."
               image={TimelineThird}
               />
               <TimelineItem 
               title="85% MINTED:
               PLAY-TO-WIN
               TEN WEEKS OF ETHEREUM"
               desctitle="PLAY TO WIN:
               TEN WEEKS OF ETHEREUM"
               desc="Ten play to win games will be made available to holders. These games will feature potential casino games and other contests. Prizes will include popular NFTs, one of one BOBS, and Ethereum. "
               image={TimelineFourth}
               />
                <TimelineItem 
               title="95% MINTED:
               BOB GAMING"
               desctitle="BOB GAMING"
               desc="BOB Gaming will be the worlds first NFT backed online sports book and casino. All holders will receive monthly dividend style payments that come from BOB Gaming profits. BOB Gaming will launch after the finale of Ten Weeks of Ethereum."
               image={TimelineFifth}
               />
            </div>
        </div>
    )

    
}

export default RoadMapCompnent