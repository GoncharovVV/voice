import React from 'react';
import './HighBar.scss';
export interface HighBarProps {
  barWidth: string;
}

const HighBar: React.FC<HighBarProps> = ({ barWidth = '0%' }) => {
  const barChildStyle = { width: barWidth };
  return (
    <div className="high-bar__holder">
      <div className="high-bar" style={barChildStyle}></div>
    </div>
  );
};

export default HighBar;
