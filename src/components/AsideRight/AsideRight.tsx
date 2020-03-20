import React, { ReactElement } from 'react';
import { ReactComponent as Speaker } from '../../assets/icons/voice-speaker.svg';
import './AsideRight.scss';
export interface AsideRightProps {
  title?: string;
  children?: ReactElement;
  asideClass?: string
}

const AsideRight: React.FC<AsideRightProps> = ({ title, children, asideClass=undefined }) => {
  return (
    <aside className={`aside-section_right aside-section_hide-mobile ${asideClass && asideClass}`}>
      {children ? (
        children
      ) : (
        <>
          <div className="text text_blue aside-section__text">{title}</div>
          <Speaker className="svg-icon voice-speaker__icon" />
        </>
      )}
    </aside>
  );
};

export default AsideRight;
