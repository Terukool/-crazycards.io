import React, { FC } from 'react';
import { CrazyCards } from '../crazycards/CrazyCards';
import { LayoutSettings } from '../layoutSettings/LayoutSettings';

const Layout : FC = () => 
    <LayoutSettings>
      <CrazyCards/>
    </LayoutSettings>
    
export default Layout;
