import React from 'react';
import {useSelector} from 'react-redux';
import AuthStack from './stacks/authStacks';
import MainStack from './tabs/mainStack';

const Routes = () => {
  const {isLoggedIn} = useSelector((state: any) => state.root.user);

  return <>{isLoggedIn ? <MainStack /> : <AuthStack />}</>;
};

export default Routes;
