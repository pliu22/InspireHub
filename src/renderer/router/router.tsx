import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import Midjourney from '../view/midjourney/Midjourney';
import Setting from '../view/setting/Setting';
import './style.css'
import ChatGPTFloat from '../view/chatGptFloat/ChatGptFloat';
import ChatGPTWeb from '../view/chatGptWeb/ChatGptWeb';
import { AzureVoice } from '../view/azureVoice/AzureVoice';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `🤖 ChatGPT`,
    children: <ChatGPTWeb/>,
  },
  {
    key: '2',
    label: `🏞️ midjourney`,
    children: <Midjourney/>,
  },
  {
    key: '3',
    label: `🦜 语音合成`,
    children: <AzureVoice/>,
  },
  {
    key: '4',
    label: `⚙️ 设置`,
    children: <Setting/>,
  },
];

export default function Routers() {
  if(window.location.pathname === '/gptFloat') {
    return <ChatGPTFloat/>
  }
  function changeTab(val : any) {
    items!.forEach((item) => {
      if(item.key === val) {
        
      }
    })
  }
  return (
    <Tabs 
    className='tab'
    tabPosition='left'
    size='large'
    defaultActiveKey="1" items={items} 
    onChange={changeTab}
    />
  );
};