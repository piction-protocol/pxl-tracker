import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { fetchBalance } from '../klaytn/PXLContract'

import ErrorMessage from '../components/ErrorMessage';
import styled from 'styled-components';
import Card from '../components/Card';
import PXLFormat from '../utils/PXLFormat';

type AddressParams = { id: string }

const Account = styled(Card)`
  margin-top: 20px;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);

`;

const Address = ({ match }: RouteComponentProps<AddressParams>)=> {
  const address = match.params.id;
  const [balance, setBalance] = useState<number>(0);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    fetchBalance(address)
      .then(setBalance)
      .catch(setError)
  }, [address])

  return (
    <>
      {error && (
        <ErrorMessage error={error} />
      )}
      <Account>
        <div>
          <h4>Address</h4>
          <span>{match.params.id}</span>
        </div>
        <div>
          <h4>Balance</h4>
          <span>{PXLFormat.format(balance / (10**18))}</span>
        </div>
      </Account>
    </>
  )
}

export default Address;