import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from './components/home/home';
import MintPage from './components/mintpage/mintpage';
import NavbarComponent from './components/navbar/navbar';
import BobsComponent from './components/bobs/bobs';
import RoadMapCompnent from './components/roadmap/roadmap'
import CommunityComponent from './components/community/community';
import TeamComponent from './components/team/team';
import FooterComponent from './components/footer/footer';

function App() {
  return (
    <div className="section">
      <NavbarComponent/>
      <div className='main-grid'>
       <HomeComponent/>
       <MintPage/>
       <BobsComponent/>
       <RoadMapCompnent/>
       <CommunityComponent/>
       <TeamComponent/>
       <FooterComponent/>
      </div>
    </div>
  );
}

export default App;
