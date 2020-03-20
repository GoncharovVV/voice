import { createStyles, FormControl, makeStyles, MenuItem, Theme } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import React, { useContext, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setDetailsFirstAction } from '../../../store/actions/detailsActions';
import { setEcomercePlatformAction } from '../../../store/actions/eCommercePlatformAction';
import { formErrors } from '../../../utils/constants/errors';
import { DetailsStep, IDetailsFirst, IEcomercePlatform, IEPlatformRes, IHandleDetailsStep } from '../../../utils/authTypes';
import { AuthServiceContext } from '../../AuthServiceContext';
import ButtonNext from '../../ButtonNext';
import AuthError from '../AuthError';
import InputField from '../InputField';
import './DetailsFirst.scss';
import { urlPattern } from '../../../utils/constants/constants';

export interface DetailsFirstProps {
  handleStep: IHandleDetailsStep;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: 0,
      minWidth: 120,
      width: '100%',
      background: '#ffffff',
      borderRadius: 5
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  })
);
const DetailsFirst: React.FC<DetailsFirstProps> = ({ handleStep }) => {
  const { handleSubmit, register, errors, control, watch, setValue } = useForm<IDetailsFirst>();
  const classes = useStyles();
  const watchEComercePlatformType = watch('eCommerecePlatformType');

  const detailsAuth: any = useSelector((state: any) => state.detailsAuth);
  const partnerKey: string = useSelector((state: any) => state.partnerKey);
  const dispatch = useDispatch();
  const { getEcomercePlatforms, postDetailsFirst } = useContext(AuthServiceContext);

  const [showError, setShowError] = useState<boolean>(false);
  const [showErrorMsg, setShowErrorMsg] = useState<string>('');
  const [platformList, setPlatformList] = useState<Array<IEcomercePlatform>>([
    { type: 'Loading', label: 'Loading...' }
  ]);

  useEffect(() => {
    getEcomercePlatforms().then((data: IEPlatformRes) => {
      if (data.error && data.message) {
        setShowErrorMsg(data.message);
        setShowError(true);
      }
      if (data.result) {
        setPlatformList(data.result);
        for (const key in detailsAuth) {
          if (detailsAuth[key].length > 0) {
            setValue(key, detailsAuth[key]);
          }
        }
      }
    });
  }, [getEcomercePlatforms, detailsAuth, setValue]);
  const onSubmitHandle = handleSubmit((data: IDetailsFirst): void => {
    const eComerceType = data.eCommerecePlatformType;
    let eComerce: any = [];
    if (eComerceType === 'OTHER') {
      eComerce = [
        {
          type: 'OTHER',
          label: data.otherECommercePlatformType
        }
      ];
    } else {
      eComerce = platformList.filter((item: any) => item.type === eComerceType);
    }
    console.log(eComerceType, data, eComerce);
    dispatch(setDetailsFirstAction({ ...data, partnerKey }));
    postDetailsFirst({ ...data, partnerKey }).then((data: any) => {
      if (data.error && data.message) {
        setShowError(true);
        setShowErrorMsg(data.message);
      } else {
        if ('eCommercePlatformSupported' in data)
          dispatch(
            setEcomercePlatformAction({
              suported: data.eCommercePlatformSupported,
              platform: eComerce[0]
            })
          );
        handleStep(DetailsStep.Two);
      }
    });
  });

  const onClose = () => {
    setShowError(false);
  };

  const selectItems = platformList.map((platform: IEcomercePlatform) => (
    <MenuItem key={platform.type} value={platform.type}>
      {platform.label}
    </MenuItem>
  ));

  return (
    <>
      <form className="form form_short" onSubmit={onSubmitHandle} noValidate={true}>
        <div className="form__row form__row-auth">
          <InputField
            errors={errors}
            label="YOUR STORE’S WEBSITE"
            type="text"
            name="storeUrl"
            placeholder="https://acmecorp.com"
            register={register({
              required: true,
              pattern: urlPattern
            })}
          />
        </div>
        <div className="form__row form__row-auth">
          <InputField
            errors={errors}
            label="YOUR FULL NAME"
            type="text"
            name="name"
            placeholder="John Doe"
            register={register({
              required: true
            })}
          />
        </div>
        <div className="form__row form__row-auth">
          <InputField
            errors={errors}
            label="PHONE NUMBER (OPTIONAL)"
            type="tel"
            name="phone"
            register={register}
          />
        </div>
        <div className="form__row form__row-auth">
          <label className="form__label" htmlFor="store-name">
            YOUR E-COMMERCE PLATFORM
          </label>
          <FormControl variant="outlined" className={classes.formControl}>
            <Controller
              as={
                <Select labelId="eCommerecePlatformType" id="eCommerecePlatformType">
                  {selectItems}
                </Select>
              }
              name="eCommerecePlatformType"
              control={control}
              rules={{ required: true }}
              defaultValue=""
            />
          </FormControl>
          {errors.eCommerecePlatformType && errors.eCommerecePlatformType.type && (
            <p className="form__error-text">{formErrors[errors.eCommerecePlatformType.type]}</p>
          )}
        </div>
        {watchEComercePlatformType === 'OTHER' && (
          <div className="form__row form__row-auth">
            <InputField
              errors={errors}
              label="TELL US WHICH?"
              type="text"
              name="otherECommercePlatformType"
              placeholder="Something I developed myself"
              register={register({
                required: true
              })}
            />
          </div>
        )}

        <div className="form__row form__row-auth form__row_right">
          <ButtonNext type={'submit'} />
        </div>
      </form>
      {showError && <AuthError onClose={onClose} text={showErrorMsg} />}
    </>
  );
};

export default DetailsFirst;
