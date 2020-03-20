import React, { useEffect } from 'react';
import ButtonNext from '../../../../components/ButtonNext';
import { ReactComponent as Wallet } from '../../../../assets/icons/wallet.svg';
import './GettingPaidModalContent.scss';
import { useHistory } from 'react-router-dom';
import { Urls } from '../../../../utils/types';
import { useDispatch, useSelector } from 'react-redux';
import { getAmazonPayModalOrderAction } from '../../../../store/actions/amazonPayModalOrderActions';
export interface GettingPaidModalContentProps {}

const GettingPaidModalContent: React.FC<GettingPaidModalContentProps> = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const loginDetails: any = useSelector((state: any) => state.loginDetails.details);
  const text: string = useSelector((state: any) => state.amazonPayModalOrder.details);

  useEffect(() => {
    const { partnerKey } = loginDetails;

    if (partnerKey) {
      dispatch(getAmazonPayModalOrderAction(partnerKey));
    }
  }, [dispatch, loginDetails]);

  const onNextClick = () => {
    history.push(Urls.CHOOSE_PLAN);
  };
  return (
    <div className="text_center paid-modal">
      <Wallet className="svg-icon paid-modal__icon" />
      <p className="paid-modal__text text_green">
        Congrats! You added a payment option to your voice store.
      </p>
      <p className="paid-modal__text">The hard part is over.</p>
      <p className="paid-modal__text">
        {/* Just say: "Alexa, tell &#60;store invocation name&#62; to order &#60;random product&#62;" */}
        Just say: "{text}"
      </p>
      <ButtonNext type={'submit'} onNextClick={onNextClick} />
    </div>
  );
};

export default GettingPaidModalContent;
