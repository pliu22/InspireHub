import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import ChatGPT from '../view/chatGPT/ChatGPT';
import Midjourney from '../view/midjourney/Midjourney';
import Setting from '../view/setting/Setting';
import './style.css'
import ChatGPTFloat from '../view/chatGPTFloat/ChatGPTFloat';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `🤖 ChatGPT `,
    children: <ChatGPT/>,
  },
  {
    key: '2',
    label: `🏞️ midjourney`,
    children: <Midjourney/>,
  },
  {
    key: '3',
    label: `⚙️ 设置`,
    children: <Setting/>,
  },
];

export default function Routers() {
  if(window.location.pathname === '/gptFloat') {
    return <ChatGPTFloat/>
  }
  return (
    <Tabs 
    className='tab'
    tabPosition='left'
    size='large'
    defaultActiveKey="1" items={items} />
  );
};