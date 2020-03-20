import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import UploadStore from '../../../components/Auth/UploadStore';
import { getUserDetailsAction } from '../../../store/actions/authActions';
import { getShopifyCallbackAction } from '../../../store/actions/shopifyCallbackActions';
import { Urls } from '../../../utils/types';

export interface UploadStoreContainerProps {}

const UploadStoreContainer: React.FC<UploadStoreContainerProps> = () => {
  const dispatch = useDispatch();
  const details: any = useSelector((state: any) => state.loginDetails.details);
  const shopifyCallback: any = useSelector((state: any) => state.shopifyCallback);

  const [watchRedirect, setWatchRedirect] = useState<boolean>(false);
  const [startAnim, setStartAnim] = useState<boolean>(false);
  let history = useHistory();

  const handleDone = () => {
    let timer: any = null;
    timer = setTimeout(() => {
      if (timer) {
        clearTimeout(timer);
      }
      if(details.partnerKey) {
        dispatch(getUserDetailsAction(details.partnerKey));
      }
      setWatchRedirect(true);
    }, 1000);
  };

  useEffect(() => {
    const { navigateToScreen } = details;

    if (watchRedirect && navigateToScreen) {
      history.push((Urls as any)[navigateToScreen]);
    }
  }, [watchRedirect, details, history]);

  useEffect(() => {
    if (shopifyCallback.data) {
      // setStartAnim(false);
      setStartAnim(true);
    }
    if (window.location.search.length > 0 && details.partnerKey) {
      const { partnerKey } = details;
      dispatch(getShopifyCallbackAction({ partnerKey, query: window.location.search }));
    }
  }, [details, dispatch, shopifyCallback.data]);

  return (
    <>
      <UploadStore
        key="uploadProgress"
        handleDone={handleDone}
        startAnim={startAnim}
        replaceData={shopifyCallback.data}
      />
    </>
  );
};

export default UploadStoreContainer;
