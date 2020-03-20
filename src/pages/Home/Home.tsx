import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomeInfoCard from '../../components/HomeInfoCard';
import Loading from '../../components/Loading';
import Header from '../../components/Header';
import { getHomeScreenDetailsAction, onCancelGetHomeScreenDetailsAction } from '../../store/actions/homeScreenDetailsActions';
import {
  // Urls,
  ICompleteSteps
} from '../../utils/types';
import MainLayout from '../MainLayout';
import './Home.scss';
// import InfoWithBar from '../../components/InfoWithBar'; 
export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  // homeScreenDetails
  const homeScreenDetails = useSelector((state: any) => state.homeScreenDetails.details);
  // const [completionRate, setCompletionRate] = useState<string>('0%');
  const dispatch = useDispatch();
  // const stepsValue = {
  //   completed: {
  //     title: 'completed steps',
  //     value: 50,
  //   },
  //   needed: {
  //     title: 'steps needed',
  //     value: 50,
  //   }
  // }
  const defaultState: ICompleteSteps[] = [
    {
      title: '',
      message: '',
      buttonLabel: '',
      buttonRedirectTo: ''
    }
  ];
  useEffect(() => {
    if (homeScreenDetails) {
      setStepItemsArr(homeScreenDetails.cards);
      // setTimeout(() => {
      //   setCompletionRate(`${homeScreenDetails.completionRate * 100}%`);
      // }, 500);
    }
  }, [homeScreenDetails]);

  useEffect(() => {
    dispatch(getHomeScreenDetailsAction());
    return () => dispatch(onCancelGetHomeScreenDetailsAction());
  }, [dispatch]);

  const [stepItemsArr, setStepItemsArr] = useState<ICompleteSteps[]>(defaultState);
  const steps = stepItemsArr!.map((itemStep: ICompleteSteps, idx: number) => (
    <div className="home__row" key={`stepHome${idx}`}>
      <div className="white-box home__content">
        <HomeInfoCard
          title={itemStep.title}
          description={itemStep.message}
          buttonLabel={itemStep.buttonLabel}
          buttonRedirectTo={itemStep.buttonRedirectTo}
        />
      </div>
    </div>
  ));

  return (
    <MainLayout>
      <section className="main__middle ">
        <Header title="" titleClass="home__title" />
        <div className="container__pad-right home__container">
          {/* <div className="home__row home__row_top">
            <div className="white-box home__content">
              <InfoWithBar
                title="Make your store truly outstanding"
                barWidth={completionRate}
                steps={stepsValue}
              />
              <div className="underline_grey"></div>
              <HomeInfoCard
                title="Drive more session to your online store with a marketing campaign in Shopify."
                buttonLabel="VISIT SHOPIFY MARKETING"
                buttonRedirectTo={Urls.AUTH}
              />
            </div>
          </div> */}
          <div className="home__row">
            <h3 className="home__content">Complete all steps</h3>
          </div>
          {homeScreenDetails && stepItemsArr ? steps : <Loading />}
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
