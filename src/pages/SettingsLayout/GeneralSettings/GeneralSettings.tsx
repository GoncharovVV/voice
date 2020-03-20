import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ReactComponent as CartIcon } from '../../../assets/icons/cart.svg';
import InputField from '../../../components/Auth/InputField';
import ButtonNext from '../../../components/ButtonNext';
import ButtonSkip from '../../../components/ButtonSkip';
import GeneralSettingsAside from '../../../components/GeneralSettingsAside';
import Header from '../../../components/Header';
import Loading from '../../../components/Loading';
import NotifyStatic from '../../../components/NotifyStatic';
import UploadImage from '../../../components/UploadImage';
import { onCancelPostGeneralUploadLogoAction, postGeneralUploadLogoAction } from '../../../store/actions/generalLogoActions';
import { getSettingsGeneralAction, onCancelGetSettingsGeneralAction, onClearSettingsGeneralAction, postSettingsGeneralAction } from '../../../store/actions/generalSettingsActions';
import { checkAlexaSkillLaunchPhrases, emailPattern, settingsGeneralFields, urlPattern } from '../../../utils/constants/constants';
import { formErrors } from '../../../utils/constants/errors';
import { Urls } from '../../../utils/types';
import './GeneralSettings.scss';
export interface GeneralSettingsProps {}

const GeneralSettings: React.FC<GeneralSettingsProps> = () => {
  const { handleSubmit, register, errors, watch, setValue, triggerValidation, getValues } = useForm<
    any
  >();
  let history = useHistory();
  const generalSettings: any = useSelector((state: any) => state.generalSettings.details);
  const isLoading: any = useSelector((state: any) => state.generalSettings.isLoading);
  const { name, invocationName, privacyPolicyUrl, termsUrl, contactUsUrl, refundPolicyUrl } = watch(
    settingsGeneralFields
  );
  const picture = watch('picture');
  const dispatch = useDispatch();
  const [imgUrl, setImgUrl] = useState<any>(null);

  useEffect(() => {
    if (!!picture && !!picture[0]) {
      triggerValidation('picture');
      if (picture[0].type === 'image/jpeg' || picture[0].type === 'image/png' ) {
        dispatch(postGeneralUploadLogoAction(picture[0]));
      }
    }
    return () => dispatch(onCancelPostGeneralUploadLogoAction());
  }, [picture, dispatch, triggerValidation]);

  const onSubmitHandle = handleSubmit((data: any): void => {
    const {
      name,
      invocationName,
      logoUrl,
      contactUsUrl,
      termsUrl,
      privacyPolicyUrl,
      refundPolicyUrl
    } = data;
    dispatch(
      postSettingsGeneralAction({
        name,
        invocationName,
        logoUrl,
        contactUsUrl,
        termsUrl,
        privacyPolicyUrl,
        refundPolicyUrl,
        navTo: Urls.SEO
      })
    );
  });
  useEffect(() => {
    if (generalSettings && !generalSettings.navTo) {
      settingsGeneralFields.forEach((item: string) => {
        setValue(item, generalSettings[item] || '');
      });
    }
  }, [generalSettings, setValue, triggerValidation]);
  useEffect(() => {
    if (generalSettings && generalSettings.logoUrl ) {
      setImgUrl(generalSettings.logoUrl);
    }
  }, [generalSettings, setImgUrl])
  useEffect(() => {
    if (!!generalSettings && !!generalSettings.navTo) {
      history.push(generalSettings.navTo);
    }
    return () => dispatch(onClearSettingsGeneralAction());
  }, [generalSettings, history, dispatch]);
  useEffect(() => {
    dispatch(getSettingsGeneralAction());
    return () => dispatch(onCancelGetSettingsGeneralAction());
  }, [dispatch]);

  const handleValidation = async () => {
    await triggerValidation([...settingsGeneralFields, 'picture']);
  };
  const handleOnChange = () => {
    handleValidation().then(() => {
      if (Object.keys(errors).length === 0) {
        const {
          name,
          invocationName,
          logoUrl,
          contactUsUrl,
          termsUrl,
          privacyPolicyUrl,
          refundPolicyUrl
        } = getValues();

        dispatch(
          postSettingsGeneralAction({
            name,
            invocationName,
            logoUrl,
            contactUsUrl,
            termsUrl,
            privacyPolicyUrl,
            refundPolicyUrl
            // navTo: Urls.SEO
          })
        );
      }
    });
  };
  const onSkipClick = () => {
    history.push(Urls.SEO);
  };
  return (
    <>
      <Header title="General" subTitleText="Settings" />
      <div className="content">
        <div className="general__content">
          <div className="form__row form__row_large">
            <NotifyStatic text="Give us some information so we can create your store">
              <CartIcon className="svg-icon general__cart-icon" />
            </NotifyStatic>
          </div>
          <form className="form form_short" onSubmit={onSubmitHandle} noValidate={true}>
            <div className="form__row form__row_large">
              <InputField
                errors={errors}
                label="STORE NAME"
                type="text"
                showSuccessIcon={!!name}
                handleOnChange={handleOnChange}
                name="name"
                placeholder=""
                register={register({
                  required: true
                })}
              />
            </div>
            <div className="form__row form__row_large">
              <InputField
                errors={errors}
                label="VOICE STORE INVOCATION NAME"
                type="text"
                showSuccessIcon={!!invocationName}
                handleOnChange={handleOnChange}
                name="invocationName"
                placeholder=""
                register={register({
                  required: true,
                  validate: {
                    twoWords: (value) => {
                      return value.trim().split(' ').length > 1;
                    },
                    alexaPhrases: (value) => {
                      return checkAlexaSkillLaunchPhrases(value);
                    }
                  }
                })}
              />
            </div>
            <div className="form__row form__row_large form__row_image">
              <input
                type="hidden"
                name="logoUrl"
                ref={register({
                  required: true
                })}
              />
              <UploadImage
                errors={errors}
                label="UPLOAD YOUR LOGO"
                buttonLabel="ADD LOGO"
                name="picture"
                // handleUploadLogo={handleUploadLogo}
                imgUrl={imgUrl}
                register={register({
                  validate: {
                    typeOfImage: (value) => {
                      if (!!generalSettings && !!generalSettings.logoUrl && !value[0]) {
                        return true;
                      }
                      else if (!!value[0]) {
                        return value[0].type === 'image/jpeg' || value[0].type === 'image/png';
                      }
                    }
                  }
                })}
              />
              {errors['logoUrl'] && !errors['picture'] && <p className="form__error-text">{formErrors.required}</p>}
              <p className="text text_blue general__text">
                Need help creating your icon? Click{' '}
                <a
                  className="link link_blue link_underline"
                  href="https://developer.amazon.com/docs/tools/icon-builder.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>{' '}
                to use the Alexa Skill Icon Builder.
              </p>
            </div>
            <div className="form__row form__row_large">
              <InputField
                errors={errors}
                label="CONTACT US EMAIL"
                type="text"
                showSuccessIcon={!!contactUsUrl}
                handleOnChange={handleOnChange}
                name="contactUsUrl"
                placeholder=""
                register={register({
                  required: true,
                  pattern: emailPattern
                })}
              />
            </div>
            <div className="form__row form__row_large">
              <InputField
                errors={errors}
                label="TERMS URL"
                type="text"
                showSuccessIcon={!!termsUrl}
                handleOnChange={handleOnChange}
                name="termsUrl"
                placeholder=""
                register={register({
                  required: true,
                  pattern: urlPattern
                })}
              />
            </div>
            <div className="form__row form__row_large">
              <InputField
                errors={errors}
                label="PRIVACY POLICY URL"
                type="text"
                showSuccessIcon={!!privacyPolicyUrl}
                handleOnChange={handleOnChange}
                name="privacyPolicyUrl"
                placeholder=""
                register={register({
                  required: true,
                  pattern: urlPattern
                })}
              />
            </div>
            <div className="form__row form__row_large">
              <InputField
                errors={errors}
                label="REFUND POLICY URL"
                type="text"
                showSuccessIcon={!!refundPolicyUrl}
                handleOnChange={handleOnChange}
                name="refundPolicyUrl"
                placeholder=""
                register={register({
                  required: true,
                  pattern: urlPattern
                })}
              />
            </div>
            <div className="form__row form__row_large form__row_right">
              <ButtonSkip onSkipClick={onSkipClick} />
              <ButtonNext type="submit" />
            </div>
          </form>
        </div>
        <GeneralSettingsAside />
      </div>
      {
        isLoading &&
        <Loading />
      }
    </>
  );
};

export default GeneralSettings;
