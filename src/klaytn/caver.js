import Caver from 'caver-js';

export const config = {
  rpcURL: process.env.REACT_APP_RPC_URL || 'https://api.baobab.klaytn.net:8651'
}

export const caver = new Caver(config.rpcURL);

export default caver;