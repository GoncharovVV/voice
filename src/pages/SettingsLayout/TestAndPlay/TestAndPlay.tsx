import React from 'react';
import './TestAndPlay.scss';
import CommingSoon from '../../CommingSoon';
export interface TestAndPlayProps {}

const TestAndPlay: React.FC<TestAndPlayProps> = () => {
  return <CommingSoon isChild={true} />;
};

export default TestAndPlay;
