import React from 'react';
import './SubTitle.scss';
export interface SubTitleProps {
  subTitle: string;
}

const SubTitle: React.FC<SubTitleProps> = ({ subTitle }) => {
  return (
    <div className="sub-title__container">
      <span className="sub-title">{subTitle}</span>
    </div>
  );
};

export default SubTitle;
