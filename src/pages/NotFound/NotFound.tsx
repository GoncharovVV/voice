import React from 'react';
export interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = () => {
  return <span>Oops, page not found!</span>;
};

export default NotFound;
