import React, { useEffect, useState } from 'react';
import Clipboard from 'react-clipboard.js';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ReactComponent as Amazon } from '../../../assets/icons/amazon.svg';
import { ReactComponent as Copy } from '../../../assets/icons/copy.svg';
import { ReactComponent as Link } from '../../../assets/icons/link.svg';
import InputField from '../../../components/Auth/InputField';
import ButtonNext from '../../../components/ButtonNext';
import ButtonSkip from '../../../components/ButtonSkip';
import Header from '../../../components/Header';
import ModalContainer from '../../../components/ModalContainer';
import ScheduleCall from '../../../components/ScheduleCall';
import { getAmazonPayDetailsAction, onCancelGetAmazonPayDetailsAction, postAmazonPayDetailsAction } from '../../../store/actions/amazonPayDetailsActions';
import { amazonDetailFields } from '../../../utils/constants/constants';
import { Urls } from '../../../utils/types';
import './GettingPaid.scss';
import GettingPaidModalContent from './GettingPaidModalContent/GettingPaidModalContent';
export interface GettingPaidProps {}

const GettingPaid: React.FC<GettingPaidProps> = () => {
  toast.configure({
    autoClose: 2000,
    draggable: false,
  });
  const { register, errors, handleSubmit, setValue, getValues, triggerValidation, watch } = useForm<
    any
  >();

  let history = useHistory();
  const dispatch = useDispatch();
  const inputNames = ['merchantId', 'accessKeyId', 'accessKeySecret'];
  const { merchantId, accessKeyId, accessKeySecret } = watch(inputNames);
  const loginDetails: any = useSelector((state: any) => state.loginDetails.details);
  const amazonPayDetails: any = useSelector((state: any) => state.amazonPayDetails.details);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [skillId, setSkillId] = useState<string>('XXXXXXXXXXXXXXXX');
  const whereTextDoFind =
    'https://voicefront-assets.s3.amazonaws.com/console/Integrate+your+Skill+with+Amazon+Pay.pdf';

  const onSubmit = handleSubmit((data) => {
    const { partnerKey } = loginDetails;
    console.log(data);
    dispatch(postAmazonPayDetailsAction({ body: { ...data, alexaSkillId: skillId }, partnerKey }));
    setOpenModal(true);
  });
  const handleValidation = async () => {
    await triggerValidation(inputNames);
  };
  const onSkipClick = () => {
    history.push(Urls.CHOOSE_PLAN);
  };
  const handleOnChange = () => {
    handleValidation().then(() => {
      if (Object.keys(errors).length === 0) {
        const data = getValues();
        const { partnerKey } = loginDetails;
        dispatch(
          postAmazonPayDetailsAction({ body: { ...data, alexaSkillId: skillId }, partnerKey })
        );
      }
    });
  };

  useEffect(() => {
    if (amazonPayDetails) {
      amazonDetailFields.forEach((item: string) => {
        setValue(item, amazonPayDetails[item] || '');
      });
      // console.log(amazonPayDetails.alexaSkillId);
      setSkillId(amazonPayDetails.alexaSkillId);
    }
  }, [amazonPayDetails, setValue]);

  useEffect(() => {
    dispatch(getAmazonPayDetailsAction());
    return () => dispatch(onCancelGetAmazonPayDetailsAction());
  }, [dispatch]);
  const handleClose = () => {
    setOpenModal(false);
  };
  const onSuccessCopy = () => {
    console.log('success copy');
    toast.success('Alexa Skill ID Copied!', {
      position: toast.POSITION.TOP_CENTER
    });
  };
  // const onCopyClick = () => {
  //   navigator.clipboard
  //     .writeText(skillId)
  //     .then(() => {
  //       console.log('Success');
  //     })
  //     .catch((err) => {
  //       console.log('Something went wrong', err);
  //     });
  // };

  return (
    <>
      <Header title="Get Paid" subTitleText="Settings" />
      <div className="paid__row">
        <div className="amazon-icon__holder">
          <Amazon className="svg-icon amazon-icon" />
        </div>
        <div className="amazon__text">
          <a href="https://pay.amazon.com/" className="amazon__link" target="blank">
            Amazon Pay <Link className="svg-icon amazon__link-icon" />
          </a>
        </div>
        <p className="main__text">
          In order for users to pay on Alexa, you must have an Amazon Pay account.
        </p>
      </div>
      <form onSubmit={onSubmit}>
        <div className="form__row_large form__row">
          <InputField
            label="SELLER ID"
            type="text"
            showSuccessIcon={!!merchantId}
            handleOnChange={handleOnChange}
            name="merchantId"
            errors={errors}
            register={register({
              required: true,
              validate: {
                notEmpty: (value) => value.trim().length > 0
              }
            })}
          />
        </div>
        <div className="form__row_large form__row">
          <InputField
            label="MWS ACCESS KEY ID"
            type="text"
            showSuccessIcon={!!accessKeyId}
            handleOnChange={handleOnChange}
            name="accessKeyId"
            errors={errors}
            register={register({
              required: true,
              validate: {
                notEmpty: (value) => value.trim().length > 0
              }
            })}
          />
        </div>
        <div className="form__row_large form__row">
          <InputField
            label="MWS SECRET ACCESS KEY"
            type="text"
            showSuccessIcon={!!accessKeySecret}
            handleOnChange={handleOnChange}
            name="accessKeySecret"
            errors={errors}
            register={register({
              required: true,
              validate: {
                notEmpty: (value) => value.trim().length > 0
              }
            })}
          />
        </div>
        <div className="form__row_large form__row">
          <div className="text_uppercase text_strong skill-id__text">
            Your Alexa skill id is:
            <div className="text_blue skill-id">
              {skillId}
              {/* <button type="button" className="skill-id__copy" onClick={onCopyClick}>
              </button> */}
              <Clipboard
                className="skill-id__copy"
                data-clipboard-text={skillId}
                onSuccess={onSuccessCopy}
              >
                <Copy className="svg-icon" />
              </Clipboard>
            </div>
          </div>

          <a
            href={whereTextDoFind}
            target="blank"
            rel="noopener noreferrer"
            className="link link_blue link_underline paid__link"
          >
            Where do I find these details?
          </a>
        </div>

        <div className="form__row_large form__row form__row_right">
          <ButtonSkip onSkipClick={onSkipClick} />
          <ButtonNext type={'submit'} />
        </div>
        <div className="form__row_large form__row form__row_right">
          <ScheduleCall />
        </div>
      </form>
      <ModalContainer open={openModal} handleClose={handleClose} title="">
        <GettingPaidModalContent />
      </ModalContainer>
    </>
  );
};

export default GettingPaid;
