import type { RadioChangeEvent, TabsProps } from 'antd';
import { Radio, Space, Tabs } from 'antd';
import React, { useState } from 'react';
import ChatGPT from '../view/chatGPT/ChatGPT';
import Midjourney from '../view/midjourney/Midjourney';
import Setting from '../view/setting/Setting';

type TabPosition = 'left' | 'right' | 'top' | 'bottom';

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
  return (
    <Tabs 
    tabPosition='left'
    size='large'
    defaultActiveKey="1" items={items} />
  );
};
