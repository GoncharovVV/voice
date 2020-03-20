import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as Cart } from '../../../assets/icons/cart-2.svg';
import { ReactComponent as Logo } from '../../../assets/icons/logo.svg';
import { storeSteps } from '../../../utils/constants/storeSteps';
import { ISToreSteps } from '../../../utils/types';
import Bar from '../../Bar';
import NotifyStatic from '../../NotifyStatic';
import UploadStoreIcons from '../../UploadStoreIComponents/UploadStoreIcons';
import AuthError from '../AuthError';
import './UploadStore.scss';

export interface UploadStoreProps {
  startAnim: boolean;
  handleDone(): void;
  replaceData: any;
}

const UploadStore: React.FC<UploadStoreProps> = ({ startAnim, handleDone, replaceData }) => {
  const [dataToShow, setDataToShow] = useState<ISToreSteps[]>(storeSteps);
  const [idx, setIdx] = useState<number>(0);
  const [isDone, setIsDone] = useState<boolean>(false);
  const [time, setTime] = useState<number>(1500);
  const [stepDetails, setStepDetails] = useState<ISToreSteps>(dataToShow[idx]);
  const shopifyCallback: any = useSelector((state: any) => state.shopifyCallback);
  const [showError, setShowError] = useState<boolean>(false);
  const onClose = () => {
    setShowError(false);
  };
  useEffect(() => {
    if (replaceData) {
      const newStepDetails = storeSteps.map((item) => {
        if (item.toReplace) {
          item.stepLabel = item.stepLabel.replace(
            item.toReplace as string,
            replaceData[item.replaceValue as string]
          );
        }
        return item;
      });
      setDataToShow(newStepDetails);
    }
    let timer: any = null;
    if (isDone) {
      timer = setTimeout(() => {
        handleDone();
      }, 500);
    }
    return () => clearTimeout(timer);
  }, [handleDone, idx, isDone, replaceData]);

  useEffect(() => {
    let timer: any = null;
    if (showError !== shopifyCallback.error) {
      setShowError(shopifyCallback.error);
    }
    if (startAnim && idx !== dataToShow.length) {
      console.log(time);
      timer = setTimeout(() => {
        setIdx((x) => x + 1);

        setTime((x) => Math.min(x + 1000, 6500));

        setStepDetails(dataToShow[idx]);

        if (dataToShow[idx].step === 'done') {
          setIsDone(true);
        }
      }, time);
    }
    return () => clearTimeout(timer);
  }, [idx, time, startAnim, shopifyCallback.error, showError, dataToShow]);

  return (
    <main className="main main_store">
      <div className="store__logo-holder">
        <Logo className="svg-icon icon__logo" />
      </div>
      <section className="store__container">
        <div className="store__content">
          <h1 className="text_center store__title">Thank you!</h1>
          <NotifyStatic
            text="We are retrieving the content from your web store in order to create your voice store"
            nameClass="store__notify text_center"
          >
            <Cart className="svg-icon store-icon" />
          </NotifyStatic>
          <div className="store__animation">
            <UploadStoreIcons step={stepDetails.step} />
          </div>
          {showError ? (
            <div className="store__error">
              <AuthError onClose={onClose}>
                Something bad happened. <br />
                Please contact our support at{' '}
                <a className="store__link" href="mailto:support@voicefront.ai">
                  support@voicefront.ai
                </a>
              </AuthError>
            </div>
          ) : (
            <Bar stepDetails={stepDetails} />
          )}
        </div>
      </section>
    </main>
  );
};

export default UploadStore;
