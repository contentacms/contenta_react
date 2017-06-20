import React from 'react';
import Search from '../../02_molecule/Search/Search';
import Logo from '../../02_molecule/Logo/Logo';
import Navigation from '../Navigation/Navigation';

const PageHeader = () => (
  <div>
    <Search />
    <div>
      <Logo />
      <Navigation />
    </div>
  </div>
);

export default PageHeader;
