import React from 'react';
import './Seo.scss';
import CommingSoon from '../../CommingSoon';
export interface SeoProps {}

const Seo: React.FC<SeoProps> = () => {
  return <CommingSoon isChild={true} />;
};

export default Seo;
