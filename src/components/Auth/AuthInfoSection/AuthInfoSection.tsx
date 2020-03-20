import React from 'react';
import './AuthInfoSection.scss';
export interface AuthInfoSectionProps {
  // infoTitle: string
}

const AuthInfoSection: React.FC<AuthInfoSectionProps> = () => {
  return (
    <div className="auth__info">
      <h2 className="auth__info-title">
        Hey there, <br/>
        we’re here to give <br/> your business <br/> a voice!
      </h2>
    </div>
  );
};

export default AuthInfoSection;
