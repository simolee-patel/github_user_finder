import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';
import UserInfo from '../components/Info';
const Dashboard = () => {
  const { isLoading } = React.useContext(GithubContext);
  if (isLoading) {
    return (
      <main>

        <Search />
        <img src={loadingImage} className="loading-img" def="loading" />
      </main>

    );
  }
  return (
    <main>

      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
