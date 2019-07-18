import React, { useEffect, useState } from 'react';
import Transaction from '../components/Transaction'
import { TransferEvent, fetchTransfers } from '../klaytn/PXLContract';
import Loading from '../components/Loading';

const Transactions = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [transferEvents, setTransferEvents] = useState<TransferEvent[]>([]);

  useEffect(() => {
    fetchTransfers('0', 'latest')
      .then(setTransferEvents)
      .catch(console.log)
      .finally(() => setLoading(false));
  }, [])

  return (
    <>
      {loading && <Loading />}
      {transferEvents.map((t) => (
        <Transaction 
          key={t.id}
          blockHash={t.transactionHash}
          blockNumber={t.blockNumber}
          from={t.returnValues.from}
          to={t.returnValues.to}
          value={t.returnValues.value}
        />
      ))}
    </>
  )
}

export default Transactions;