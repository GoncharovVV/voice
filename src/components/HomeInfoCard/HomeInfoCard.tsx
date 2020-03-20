import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './HomeInfoCard.scss';
import { Urls } from '../../utils/types';
export interface HomeInfoCardProps {
  title: string;
  description?: string;
  buttonLabel: string;
  buttonRedirectTo: string
}

const HomeInfoCard: React.FC<HomeInfoCardProps> = ({title, description='', buttonRedirectTo, buttonLabel}) => {
  const [urlPath, setUrlPath] = useState<string>('/');
  useEffect(() => {
    if(buttonRedirectTo && (Urls as any)[buttonRedirectTo]) {
      setUrlPath((Urls as any)[buttonRedirectTo])
    }
  }, [buttonRedirectTo])
  return (
    <div className="info-card">
      <p className="info-card__title text_blue">
        {title}
      </p>
      {
        description.length>0 &&
        <p className="info-card__description">
          {description}
        </p>
      }
      <div className="info-card__link-holder">
        <NavLink to={urlPath} className="info-card__link">
          {buttonLabel}
        </NavLink>
      </div>
    </div>
  );
}

export default HomeInfoCard;