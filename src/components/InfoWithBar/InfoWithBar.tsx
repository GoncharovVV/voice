import React from 'react';
import { NavLink } from 'react-router-dom';
import HighBar from '../HighBar';
import './InfoWithBar.scss';

export interface InfoWithBarProps {
  barWidth: string;
  title: string;
  steps: {
    completed: {
      title: string;
      value: number;
    };
    needed: {
      title: string;
      value: number;
    };
  };
  link?: {
    title: string;
    url: string;
  } | null;
}

const InfoWithBar: React.FC<InfoWithBarProps> = ({ barWidth, title = '', steps, link = null }) => {
  const { completed, needed } = steps;
  return (
    <>
      <div className="flex flex__just_between flex__align_start flex__wrap" >
        <h3 className="text_green step-details__title">{title}</h3>
        {link && (
          <NavLink className="info-card__link" to={link.url}>
            {link.title}
          </NavLink>
        )}
      </div>
      <div className="flex flex___align_start home__info flex__wrap">
        <div className="home__bar-holder">
          <HighBar barWidth={barWidth} />
        </div>
        <div className="step-details flex flex___align_start flex__wrap">
          <div className="step-details__item flex flex___align_start flex__just_end">
            <div className="step-details__icon"></div>
            <div className="step-details__info">
              <span className="step-details__info_number">{completed.value}</span>
              <span className="step-details__info_text">{completed.title}</span>
            </div>
          </div>
          <div className="step-details__item flex flex___align_start flex__just_end">
            <div className="step-details__icon step-details__icon_light"></div>
            <div className="step-details__info">
              <span className="step-details__info_number">{needed.value}</span>
              <span className="step-details__info_text">{needed.title}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoWithBar;
