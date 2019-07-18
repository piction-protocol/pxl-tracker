import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Card from './Card';
import Colors from '../Colors';
import { ReactComponent as ChevronRight } from './ic-chevron-right.svg';
import PXLFormat from '../utils/PXLFormat';

export interface TransactionProps {
  blockHash: string,
  blockNumber?: number,
  from: string,
  to: string,
  value: number
}

const TransactionWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 24px 0;
`;

const Value = styled.span`
  font-weight: bold;
  margin-bottom: 24px;
  font-size: 1.2em;
`;

const Addresses = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  a {
    color: ${Colors.pictionblue}
    text-decoration: none;
  }
`

const BlockInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 14px;
  color: ${Colors.grey_dark};
`

const Transaction: React.FC<TransactionProps> = ({ blockHash, blockNumber, from , to, value }) => (
  <TransactionWrapper>
    <Value>
      {PXLFormat.format(value / 10**18)}
    </Value>
    <Addresses>
      <Link to={`/address/${from}`}>{from}</Link>
      <ChevronRight />
      <Link to={`/address/${to}`}>{to}</Link>
    </Addresses>
    <BlockInfo>
      <span><strong>Block #: </strong>{blockNumber}</span>
      <span><strong>TX Hash: </strong>{blockHash}</span>
    </BlockInfo>
  </TransactionWrapper>
)

export default Transaction;