import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as Email } from '../../assets/icons/email-simple.svg';
import { ReactComponent as User } from '../../assets/icons/user.svg';
import UserDropDown from '../UserDropDown';
import './UserInfo.scss';
import { toggleDropUserMenuAction } from '../../store/actions/toggleMenuActions';
export interface UserInfoProps {}

const UserInfo: React.FC<UserInfoProps> = () => {
  const loginDetails: any = useSelector((state: any) => state.loginDetails.details);
  const toggleMenu: any = useSelector((state: any) => state.toggleMenu);
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [invocationLine, setInvocationLine] = useState<string>('');
  const [unreadNotifications, setUnreadNotifications] = useState<number>(0);

  const [holderClassNames, setHolderClassNames] = useState<string[]>(['user__holder', 'flex__align_center','flex']);

  useEffect(() => {
    if (loginDetails) {
      setImageUrl(loginDetails.pic);
      setUserName(loginDetails.userName);
      setInvocationLine(loginDetails.invocationLine);
      setUnreadNotifications(loginDetails.unreadNotifications);
    }
  }, [loginDetails]);
  useEffect(() => {
    if (toggleMenu && toggleMenu.isUserOpen) {
      setHolderClassNames((names: string[]) => {
        const newNames =
          names.indexOf('user__holder_active') === -1
            ? [...names, 'user__holder_active']
            : [...names];
        return newNames;
      });
    } else {
      setHolderClassNames((names: string[]) => {
        const newNames = [...names];
        if (newNames.indexOf('user__holder_active') > -1) {
          newNames.splice(newNames.indexOf('user__holder_active'), 1);
        }
        return newNames;
      });
    }
  }, [toggleMenu]);
  const handleShowDrop = () => {
    dispatch(toggleDropUserMenuAction());
  };

  return (
    <>
      <div className={holderClassNames.join(' ')}>
        <div className="user__icon-holder flex flex__align_center flex__just_center">
          <Email className="svg-icon user__email" />
          {unreadNotifications > 0 && <div className="user__new-messages"></div>}
        </div>
        <div className="user__right flex flex__align_end">
          <button type="button" className="user__drop-button" onClick={handleShowDrop}>
            <div className="user__row flex flex__align_center">
              <div className="user__img-holder">
                {(imageUrl && imageUrl.length > 0) ? (
                  <img className="image_fit" src={imageUrl} alt={userName} />
                ) : (
                  <User className="svg-icon user__image" />
                )}
              </div>
              <span className="user__name">Welcome, {userName}</span>
            </div>
            <div className="user__bottom text_center">"{invocationLine}"</div>
          </button>
          {toggleMenu.isDropUserOpen && <UserDropDown showDrop={toggleMenu.isDropUserOpen} />}
          {toggleMenu.isDropUserOpen && (
            <button className="user__burger_overlay" onClick={handleShowDrop}></button>
          )}
        </div>
      </div>
    </>
  );
};

export default UserInfo;
