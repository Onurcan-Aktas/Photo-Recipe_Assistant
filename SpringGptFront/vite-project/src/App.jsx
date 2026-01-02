import React,{ useState } from 'react'
import './App.css'
import ImageGenerator from './components/ImageGenerator.jsx'
import ChatComponent from './components/ChatComponent.jsx';
import RecipeGenerator from './components/RecipeGenerator.jsx';

function App() {
  const [activeTab,setActiveTab]=useState('image-generator');

  const handleTabChange=(tab)=>{
    //alert(tab);
    setActiveTab(tab);
  }

  return (
    <div className="App">
      <div className='tabs'>
        
      </div>
      <button className={activeTab === 'image-generator' ? 'activeTab' : ''} onClick={() => handleTabChange('image-generator')}>Image Generator</button>
      <button className={activeTab === 'chat' ? 'activeTab' : ''} onClick={() => handleTabChange('chat')}>Ask AI</button>
      <button className={activeTab === 'recipe-generator' ? 'activeTab' : ''} onClick={() => handleTabChange('recipe-generator')}>Recipe Generator</button>


      <div>
      {activeTab === 'image-generator' && <ImageGenerator />}
      {activeTab === 'chat' && <ChatComponent />}
      {activeTab === 'recipe-generator' && <RecipeGenerator />}
      </div>


      </div>

      
  )
};

export default App
