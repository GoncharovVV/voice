import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import AuthError from '../../../components/Auth/AuthError';
import FormBottom from '../../../components/Auth/FormBottom';
import SignUp from '../../../components/Auth/SignUp';
import { AuthServiceContext } from '../../../components/AuthServiceContext';
import SubTitle from '../../../components/SubTitle';
import { setPartnerKeyAction } from '../../../store/actions/authActions';
import { ISignupForm, ISignupRes } from '../../../utils/authTypes';
import { Urls } from '../../../utils/types';
import './SignUpContainer.scss';

export interface SignUpProps {}

const SignUpContainer: React.FC<SignUpProps> = () => {
  const dispatch = useDispatch();
  const { postSignUp } = useContext(AuthServiceContext);
  let { referralId } = useParams();
  let history = useHistory();
  const [showError, setShowError] = useState<boolean>(false);
  const [showErrorMsg, setShowErrorMsg] = useState<string>('');
  const { handleSubmit, register, watch, errors } = useForm<ISignupForm>();

  const onSubmit = handleSubmit(({ repeatPassword, ...data }) => {
    const sendRefId = typeof referralId === 'string' ? referralId : null;
    postSignUp({ ...data, referralId: sendRefId }).then((data: ISignupRes) => {
      if (data.error && data.message) {
        setShowError(true);
        setShowErrorMsg(data.message);
      }
      if (data.partnerKey) {
        dispatch(setPartnerKeyAction(data.partnerKey));
        history.push(Urls.DETAILS); 
      }
    });
  });

  const onClose = () => {
    setShowError(false);
  };
  return (
    <>
      <SubTitle subTitle="Welcome to VoiceFront" />

      <h1 className="auth__title">Sign Up</h1>
      <p className="signup__text">Getting started right now!</p>

      <SignUp onSubmit={onSubmit} register={register} watch={watch} errors={errors} />

      <FormBottom
        text="Already have an account?"
        link={{ linkTitle: 'Log in here!', linkUrl: `${Urls.LOGIN}` }}
      />
      {showError && <AuthError onClose={onClose} text={showErrorMsg} />}
    </>
  );
};

export default SignUpContainer;
