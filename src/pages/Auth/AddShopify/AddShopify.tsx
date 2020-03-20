import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Shop } from '../../../assets/icons/shop.svg';
import FormBottom from '../../../components/Auth/FormBottom';
import NotifyStatic from '../../../components/NotifyStatic';
import { getShopifyInstallLinkAction } from '../../../store/actions/authActions';
import { transformShopify } from '../../../utils/helpers';
import { Urls } from '../../../utils/types';
import './AddShopify.scss';
import { formErrors } from '../../../utils/constants/errors';

export interface AddShopifyProps {}

const AddShopify: React.FC<AddShopifyProps> = () => {
  const dispatch = useDispatch();
  const partnerKey: string = useSelector((state: any) => state.loginDetails.details.partnerKey);
  const installationLink: any = useSelector((state: any) => state.installationLink);
  const [isActive, setIsActive] = useState<boolean>(false);
  let history = useHistory();

  const { register, errors, handleSubmit, watch } = useForm<{ shop: string }>();
  const inputShopify = watch('shop');

  useEffect(() => {
    if (inputShopify && inputShopify.length>0) setIsActive(true);
    else setIsActive(false);
  }, [inputShopify]);

  useEffect(() => {
    if (installationLink?.error?.isError) {
      history.push(Urls.LOGIN);
    } else if (installationLink.link.length > 0) {
      window.location.href = `${installationLink.link}`;
    }
  }, [installationLink, history]);

  const onSubmit = handleSubmit((data) => {
    const callback = `${window.location.origin}${Urls.ADD_STORE}`;
    const shop = transformShopify(data.shop);
    dispatch(getShopifyInstallLinkAction({ shop, partnerKey, callback }));
  });

  return (
    <>
      <div className="form__row form__row_large">
        <h1 className="auth__title">Integrate your store</h1>
      </div>
      <div className="form__row form__row_large">
        <NotifyStatic
          text="In order for us to sell your products, we need you to login with Shopify and give us certain permissions"
          nameClass="email__notify"
        >
          <Shop className="svg-icon shop-icon" />
        </NotifyStatic>
      </div>
      <form className="form form_short" onSubmit={onSubmit} noValidate={true}>
        <div className="form__row form__row_large">
          <div className={`input__holder input__holder_shopify form__input ${errors['shop'] ? 'form__input_error' : ''}`}>
            <input
              className="fake-input"
              type="text"
              name="shop"
              id="shop"
              placeholder=""
              ref={register({
                required: true
              })}/>
              <label htmlFor="shop" className="shopify__text">.myshopify.com</label>
          </div>
          {errors['shop'] && errors['shop'].type === 'pattern' && (
            <p className="form__error-text">{errors['shop'].message}</p>
          )}
          {errors['shop'] && errors['shop'].type && (
            <p className="form__error-text">{formErrors[errors['shop'].type]}</p>
          )}
        </div>
        <div className="form__row form__row_large">
          <button type="submit" className={`button button__submit${!isActive? ' active':''}`}>
            LOGIN WITH SHOPIFY
          </button>
        </div>
        <div className="form__bottom_shopify">
          <FormBottom
            isSimpleLink={true}
            text="Want to know why we need permissions from Shopify?"
            link={{ linkTitle: 'CHECK OUT OUR FAQ', linkUrl: 'https://www.voicefront.ai/faq' }}
          />
        </div>
      </form>
    </>
  );
};

export default AddShopify;
