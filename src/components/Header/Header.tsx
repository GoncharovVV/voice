import React from 'react';
import './Header.scss';
import SubTitle from '../SubTitle';
import UserInfo from '../UserInfo';
export interface HeaderProps {
  title: string;
  titleClass?: string;
  subTitleText?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subTitleText, titleClass='' }) => {
  return (
    <div className="main-top__row">
      {
        (subTitleText || title.length>0) &&
        <div className="main-top__left">
          {
            subTitleText &&
            <SubTitle subTitle={subTitleText} />
          }
          {
            title.length>0 &&
            <h1 className={titleClass.length>0 ? titleClass: 'main__title'}>{title}</h1>
          }
        </div>
      }
      <UserInfo />

    </div>
  );
};

export default Header;
