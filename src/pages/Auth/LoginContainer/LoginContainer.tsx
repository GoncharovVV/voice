import queryString from 'query-string';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ForgotPassword from '../../../components/Auth/ForgotPassword';
import Login from '../../../components/Auth/Login';
import { AuthServiceContext } from '../../../components/AuthServiceContext';
import ModalContainer from '../../../components/ModalContainer';
import { getVerifyEmailAction, updateLoginDetailsAction } from '../../../store/actions/authActions';
import { Urls } from '../../../utils/types';
import './LoginContainer.scss';
export interface LoginContainerProps {}

const LoginContainer: React.FC<LoginContainerProps> = () => {
  const { register, errors, handleSubmit, setValue, watch, triggerValidation } = useForm<any>();
  const { postLogin } = useContext(AuthServiceContext);
  const emailValueWatch = watch('email');
  const verefiedEmail: any = useSelector((state: any) => state.verefiedEmail);

  const [showError, setShowError] = useState<boolean>(false);
  const [notActive, setNotActive] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>('');
  const [notActiveText, setNotActiveText] = useState<string>('');
  const { result, error, isLoading } = verefiedEmail;
  const [emailValue, setEmailValue] = useState<string>('');
  const [emailForgotPass, setEmailForgotPass] = useState<string>('');
  const [openModal, setOpenModal] = useState(false);
  const [showVerified, setShowVerified] = useState<boolean>(false);
  const [verefiedText, setVerefiedText] = useState<string>('Your email has been verified!');
  let history = useHistory();
  const parsed = queryString.parse(window.location.search);
  const dispatch = useDispatch();
  const onSubmit = handleSubmit((data) => {
    postLogin(data).then((result: any) => {
      if (result.error && !result.notActive) {
        setShowError(true);
        setShowVerified(false);
        setNotActive(false);
        setErrorText(result.text);
      } else if (result.notActive) {
        console.log(result);
        setNotActive(true);
        setNotActiveText(result.text);
        setShowError(false);
        setShowVerified(false);
      } else {
        const navTo = result.navigateToScreen || 'HOME';
        dispatch(updateLoginDetailsAction(result));
        history.push((Urls as any)[navTo]);
      }
    });
  });
  const onClose = () => {
    setShowError(false);
  };
  const validateEmail = async () => {
    triggerValidation('email');
  };
  const handleCloseModal = () => {
    setShowVerified(false);
    setShowError(false);
    setNotActive(false);
    setOpenModal(false);
  };
  const onForgotClick = () => {
    validateEmail().then(() => {
      if (!errors['email']) {
        setEmailForgotPass(emailValueWatch);
        setOpenModal(true);
      }
    });
  };
  const handleSuccessForgotPass = () => {
    setVerefiedText('An email was sent to you now with a temporary password');
    setShowVerified(true);
    setShowError(false);
    setNotActive(false);
    setOpenModal(false);
  };
  useEffect(() => {
    if (result.email.length > 0 && emailValue.length === 0) {
      setEmailValue(result.email);
      setShowVerified(true);
      setShowError(false);
      setNotActive(false);
    }
  }, [result.email, emailValue.length]);
  useEffect(() => {
    if (parsed.verify && result.email.length === 0 && !error && !isLoading) {
      dispatch(getVerifyEmailAction(parsed.verify));
    }
    if (error) {
      setShowVerified(false);
    }
  }, [parsed, result.email, isLoading, error, dispatch]);
  return (
    <>
      <Login
        showError={showError}
        errorText={errorText}
        notActive={notActive}
        notActiveText={notActiveText}
        onClose={onClose}
        onSubmit={onSubmit}
        register={register}
        errors={errors}
        setValue={setValue}
        emailValue={emailValue}
        showVerified={showVerified}
        onForgotClick={onForgotClick}
        verefiedText={verefiedText}
        triggerValidation={triggerValidation}
      />
      <ModalContainer
        modalHolderClass="forgot__modal"
        open={openModal}
        handleClose={handleCloseModal}
        title=""
      >
        <ForgotPassword emailValue={emailForgotPass} onSuccess={handleSuccessForgotPass} />
      </ModalContainer>
    </>
  );
};

export default LoginContainer;
