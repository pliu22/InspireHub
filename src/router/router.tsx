import type { RadioChangeEvent, TabsProps } from 'antd';
import { Radio, Space, Tabs } from 'antd';
import React, { useState } from 'react';
import ChatGPT from '../view/chatGPT/ChatGPT';
import Midjourney from '../view/midjourney/Midjourney';

type TabPosition = 'left' | 'right' | 'top' | 'bottom';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Tab 1`,
    children: <ChatGPT/>,
  },
  {
    key: '2',
    label: `Tab 3`,
    children: <Midjourney/>,
  },
];

export default function Routers() {
  return (
    <Tabs 
    tabPosition='left'
    defaultActiveKey="1" items={items} />
  );
};
