import React from 'react';
import { ICardType } from '../../utils/types';
import ToolCardContainer from '../ToolCardContainer';
import VoiceCardContainer from '../VoiceCardContainer';
import './CardList.scss';

export interface VoiceListProps {
  cards: any;
  cardType: ICardType;
}

const CardList: React.FC<VoiceListProps> = ({ cards, cardType }) => {
  const items = cards.map((item: any, idx: number) => {
    switch (cardType) {
      case 'voice':
        return <VoiceCardContainer key={`voice${idx}`} item={item} />;
      case 'tools':
        return <ToolCardContainer key={`voice${idx}`} item={item} />;
      default:
        return <span>There is no such type of cards</span>;
    }
  });
  return (
    <div className="card-list__holder">
      <ul className={`card-list flex flex__wrap ${cardType==='tools'? 'card-list__tools':''}`}>
        {cards && items}
      </ul>
    </div>
  );
};

export default CardList;
