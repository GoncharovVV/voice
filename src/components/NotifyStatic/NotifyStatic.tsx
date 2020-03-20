import React, { ReactElement } from 'react';
import './NotifyStatic.scss';
export interface NotifyStaticProps {
  nameClass?: string;
  text?: string;
  hideIcon?: boolean;
  children?: ReactElement;
  withLink?: boolean;
}

const NotifyStatic: React.FC<NotifyStaticProps> = ({
  nameClass = '',
  text,
  children,
  hideIcon = false,
  withLink = false 
}) => {
  const classNames = `notify-static ${nameClass}`;
  return (
    <div className={classNames}>
      <div className={`notify-static__container ${hideIcon ? 'notify-static__no-icon' : ''}`}>
        {withLink ? (
          children
        ) : (
          <>
            {!hideIcon && <div className="notify-static__icon">{children}</div>}
            <p className="notify-static__text">{text}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default NotifyStatic;
