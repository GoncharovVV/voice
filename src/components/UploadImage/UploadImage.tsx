import React from 'react';
import './UploadImage.scss';
import { formErrors } from '../../utils/constants/errors';
import {ReactComponent as PlusIcon} from '../../assets/icons/plus.svg';
export interface UploadImageProps {
  label: string;
  errors?: any;
  name: string;
  register: any;
  buttonLabel: string;
  imgUrl: any;
}

const UploadImage: React.FC<UploadImageProps> = ({ label, errors, name, register, buttonLabel = "Add file", imgUrl=null }) => {

  return (
    <div className="input__holder input__holder_file">
      <p className="form__label">
        {label}
      </p>
      <label className="file__label text_center">
        <input className="file" type="file" name={name} id={name} ref={register} />
        {
          imgUrl &&
          <div className="file__image">
            <img src={imgUrl} alt="" className="image_fit"/>
          </div>
        }
        <div className="file__button">
          {buttonLabel}
          <div className="file__icon flex flex__align_center flex__just_center">
            <PlusIcon className="svg-icon plus__file-icon"/>
          </div>
        </div>
        <p className="file__drag-text">Or drag and drop your file here to upload a PNG or JPG</p>
      </label>
      {errors[name] && errors[name].type === 'pattern' && (
        <p className="form__error-text">{errors[name].message}</p>
      )}
      {errors[name] && errors[name].type && (
        <p className="form__error-text">{formErrors[errors[name].type]}</p>
      )}
    </div>
  );
};

export default UploadImage;
