import './App.css';
import ChannelBar from './components/ChannelBar';
import ContentContainer from './components/ContentContainer';
import SideBar from './components/Sidebar/SideBar';

function App() {
  return (
     <div className="flex ">
      <SideBar/>
      <ChannelBar/>
      <ContentContainer/>
     </div>
  );
}

export default App;
