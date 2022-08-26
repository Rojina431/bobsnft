import './mintpage.css'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const MintPage = () => {
    return (
        <div className="main-page mint-main node">
           <div className="mint-text">
            <h1>MINT YOUR BOB:</h1>
           </div>
           <div className="mint-dropdown">
             <p>Minted: 141/5050</p>
             <div class="number-container">
                 <span style={{padding:"3px 5px", borderRight:"1px solid #D3D3D3"}}><PlusOutlined/>
                 
                 </span>
                 <span style={{paddingLeft:"46%"}}>1</span>
                 <span style={{float:"right", paddingLeft:"5px", width:"25px",  borderLeft:"1px solid #D3D3D3"}}><MinusOutlined/></span>
             </div>
             <button className='connect'>Connect Wallet</button>
           </div>
        </div>
    )
}

export default MintPage