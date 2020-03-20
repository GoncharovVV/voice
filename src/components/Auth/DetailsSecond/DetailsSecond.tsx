import { createStyles, FormControl, makeStyles, MenuItem, Theme } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import React, { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { ReactComponent as Left } from '../../../assets/icons/arrow.svg';
import {
  marketingSurveyData,
  isDeveloperData,
  annualRevenueData,
  mainUseData
} from '../../../utils/constants/authDetails';
import { IHandleDetailsStep, DetailsStep, IDetailsSecond } from '../../../utils/authTypes';
import ButtonNext from '../../ButtonNext';
import './DetailsSecond.scss';
// import { transformMarketingSurvey } from '../../../utils/helpers';
import InputField from '../InputField';
import { AuthServiceContext } from '../../AuthServiceContext';
import AuthError from '../AuthError';
import RadioGroup from '../../RadioGroup';
import DetailsCheckBox from '../DetailsCheckBox';

export interface DetailsSecondProps {
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
const DetailsSecond: React.FC<DetailsSecondProps> = ({ handleStep }) => {
  const { handleSubmit, errors, register } = useForm<any>();

  const [showOther, setShowOther] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [errorMsg, setShowErrorMsg] = useState<string>('');
  const [answers, setAnswers] = useState<IDetailsSecond>({});
  const [marketingSurveySelected, setMarketingSurveySelected] = useState<number>(0);
  const [marketingSurveyAnswers, setMarketingSurveyAnswers] = useState<any[]>([]);
  const partnerKey: string = useSelector((state: any) => state.partnerKey);
  const { postDetailsSecond } = useContext(AuthServiceContext);
  const onClose = () => {
    setShowError(false);
  };
  const classes = useStyles();
  const onSubmitHandle = handleSubmit((data): void => {
    let marketingSurveyString = '';
    if (marketingSurveyAnswers.length>1) {
      marketingSurveyString = marketingSurveyAnswers.join('; ');
    }
    if (data.marketingSurveyOther) {
      marketingSurveyString  = `${marketingSurveyString}; ${data.marketingSurveyOther}`;
    }
    console.log({ ...answers, marketingSurvey: marketingSurveyString, partnerKey });
    postDetailsSecond({ ...answers, marketingSurvey: marketingSurveyString, partnerKey }).then((data: any) => {
      if (data.error && data.message) {
        setShowError(true);
        setShowErrorMsg(data.message);
      } else {
        handleStep(DetailsStep.Done);
      }
    });

  });
  const onBackClick = () => {
    handleStep(DetailsStep.One);
  };
  const onSkipClick = () => {
    handleStep(DetailsStep.Skip);
  };
  const handleAnswersSelect = (value: string, name: string) => {
    setAnswers((x: any) => {
      const newAnswers = { ...x };
      if (name) {
        newAnswers[name] = value;
      }

      return newAnswers;
    });
  };
  const handleMarketingSurveyAnswersCheckbox = (value: string, name: string) => {

    if (value === 'Other') {
      setShowOther((x) => !x);
    }

    setMarketingSurveyAnswers((x: any[]) => {
      const newArr = [...x];
      if (newArr.indexOf(name) === -1) newArr.push(name);
      if (newArr.indexOf(value) === -1) {
        newArr.push(value);
      } else {
        newArr.splice(newArr.indexOf(value), 1);
      }
      return newArr;
    });
  };
  const handleMarketingSurveyAnswers = (value: string, name: string) => {
    setMarketingSurveyAnswers([name, value]);
  };
  const handleChangeMSurvey = (event: React.ChangeEvent<{ value: unknown }>) => {
    if (typeof event.target.value === 'number') {
      setMarketingSurveySelected(event.target.value);
      setMarketingSurveyAnswers([]);
    }
  };
  
  return (
    <form className="form form_short" onSubmit={onSubmitHandle} noValidate={true}>
      <div className="form__row">
        <label className="form__label" htmlFor="store-name">
          1. ARE YOU WILLING TO MARKET YOUR VOICE STORE?
        </label>
        <FormControl variant="outlined" className={classes.formControl}>
          <Select
            labelId="marketingSurvey"
            id="marketingSurvey"
            value={marketingSurveySelected}
            onChange={handleChangeMSurvey}
          >
            {marketingSurveyData.map((item: any, idx: number) => (
              <MenuItem key={item.value + idx} value={idx}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="form__row">
        {marketingSurveyData.length > 0 && (
          <>
            {marketingSurveyData[marketingSurveySelected].multiple ? (
              marketingSurveyData[marketingSurveySelected].options.map((item: any, idx: number) => {
                return (
                  <DetailsCheckBox
                    key={`${marketingSurveyData[marketingSurveySelected].value}${idx}`}
                    item={item}
                    id={marketingSurveyData[marketingSurveySelected].value}
                    idx={idx}
                    name={marketingSurveyData[marketingSurveySelected].label}
                    handleOnChange={handleMarketingSurveyAnswersCheckbox}
                  />
                );
              })
            ) : (
              <RadioGroup
                items={marketingSurveyData[marketingSurveySelected].options}
                name={marketingSurveyData[marketingSurveySelected].label}
                handleValue={handleMarketingSurveyAnswers}
              />
            )}
          </>
        )}
      </div>
      {showOther && (
        <div className="form__row">
          <InputField
            label="TELL US WHICH?"
            type="text"
            errors={errors}
            name="marketingSurveyOther"
            placeholder="Some other text"
            register={register({
              required: true
            })}
          />
        </div>
      )}
      {annualRevenueData && (
        <div className="form__row">
          <RadioGroup
            title={annualRevenueData.title}
            items={annualRevenueData.options}
            name={annualRevenueData.name}
            handleValue={handleAnswersSelect}
          />
        </div>
      )}
      {mainUseData && (
        <div className="form__row">
          <RadioGroup
            title={mainUseData.title}
            items={mainUseData.options}
            name={mainUseData.name}
            handleValue={handleAnswersSelect}
          />
        </div>
      )}
      {isDeveloperData && (
        <div className="form__row">
          <RadioGroup
            title={isDeveloperData.title}
            items={isDeveloperData.options}
            name={isDeveloperData.name}
            handleValue={handleAnswersSelect}
          />
        </div>
      )}
      <div className="form__row form__row_right">
        <div className="justify-holder">
          <button type="button" onClick={onBackClick} className="back">
            <Left className="svg-icon icon-back" />
            Back
          </button>
          <button type="button" className="link" onClick={onSkipClick}>
            Skip
          </button>
        </div>
        <ButtonNext type={'submit'} />
      </div>
      {showError && <AuthError onClose={onClose} text={errorMsg} />}
    </form>
  );
};

export default DetailsSecond;
