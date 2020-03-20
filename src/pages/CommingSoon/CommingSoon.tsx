import React from 'react';
import { ReactComponent as FixIcon } from '../../assets/icons/fix.svg';
import Header from '../../components/Header';
import NotifyStatic from '../../components/NotifyStatic';
import './CommingSoon.scss';
export interface CommingSoonProps {
  isChild?: boolean
}

const CommingSoon: React.FC<CommingSoonProps> = ({isChild = false}) => {
  return (
    <section className={isChild ? '' : 'main__middle'}>
      <Header title="Coming soon" titleClass="home__title" />
      <NotifyStatic withLink={true} nameClass="notify__coming">
        <>
          <div className="notify-static__icon">
            <FixIcon className="svg-icon fix-icon" />
          </div>
          <p className="notify-static__text">
            This screen is still under development. If you'd like to know when this screen will be
            released, contact us at: <a className="notify-static__link" href="mailto:support@voicefront.ai">support@voicefront.ai</a>
          </p>
        </>
      </NotifyStatic>
    </section>
  );
};

export default CommingSoon;
