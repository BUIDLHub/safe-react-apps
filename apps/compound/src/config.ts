import { Networks } from '@gnosis.pm/safe-apps-sdk';

import alphaIcon from './images/asset_ALPHA.svg';
import ampIcon from './images/asset_AMP.svg';
import busdIcon from './images/asset_BUSD.svg';
import creamIcon from './images/asset_CREAM.svg';
import daiIcon from './images/asset_DAI.svg';
import ethIcon from './images/asset_ETH.svg';
import fttIcon from './images/asset_FTT.svg';
import linkIcon from './images/asset_LINK.svg';
import inchIcon from './images/asset_1INCH.svg';
import runeIcon from './images/asset_RUNE.svg';
import sushiIcon from './images/asset_SUSHI.svg';
import uniIcon from './images/asset_UNI.svg';
import usdcIcon from './images/asset_USDC.svg';
import usdtIcon from './images/asset_USDT.svg';
import wbtcIcon from './images/asset_WBTC.svg';
import yfiIcon from './images/asset_YFI.svg';
import tokens from './tokens';

export type TokenItem = {
  id: string;
  label: string;
  iconUrl: string;
  decimals: number;
  tokenAddr: string;
  cTokenAddr: string;
};

export const rpc_token = process.env.REACT_APP_RPC_TOKEN || '';

export const getTokenList = (network: Networks): Array<TokenItem> => {
  const lowercaseNetwork = network.toLowerCase();

  if (lowercaseNetwork !== 'rinkeby' && lowercaseNetwork !== 'mainnet') {
    throw Error(`Not supported Network ${network}`);
  }

  const tokensByNetwork = tokens[lowercaseNetwork];

  if (!tokensByNetwork) {
    throw Error(`No token configuration for ${network}`);
  }

  return [
    {
      id: 'ALPHA',
      label: 'ALPHA',
      iconUrl: alphaIcon,
      decimals: 18,
      tokenAddr: tokensByNetwork.ALPHA,
      crTokenAddr: tokensByNetwork.crALPHA,
    },
    {
      id: 'AMP',
      label: 'AMP',
      iconUrl: ampIcon,
      decimals: 18,
      tokenAddr: tokensByNetwork.AMP,
      crTokenAddr: tokensByNetwork.crAMP,
    },
    {
      id: 'BBADGER',
      label: 'BBADGER',
      decimals: 18,
      tokenAddr: tokensByNetwork.BBADGER,
      crTokenAddr: tokensByNetwork.crBBADGER,
    },
    {
      id: 'BUSD',
      label: 'BUSD',
      iconUrl: busdIcon,
      decimals: 18,
      tokenAddr: tokensByNetwork.BUSD,
      crTokenAddr: tokensByNetwork.crBUSD,
    },
    {
      id: 'CREAM',
      label: 'CREAM',
      iconUrl: creamIcon,
      decimals: 18,
      tokenAddr: tokensByNetwork.CREAM,
      crTokenAddr: tokensByNetwork.crCREAM,
    },
    {
      id: 'CRETH2',
      label: 'CRETH2',
      decimals: 18,
      tokenAddr: tokensByNetwork.CRETH2,
      crTokenAddr: tokensByNetwork.crCRETH2,
    },
    {
      id: 'DAI',
      label: 'DAI',
      iconUrl: daiIcon,
      decimals: 18,
      tokenAddr: tokensByNetwork.DAI,
      crTokenAddr: tokensByNetwork.crDAI,
    },
    {
      id: 'DPI',
      label: 'DPI',
      decimals: 18,
      tokenAddr: tokensByNetwork.DPI,
      crTokenAddr: tokensByNetwork.crDPI,
    },
    {
      id: 'ETH',
      label: 'ETH',
      iconUrl: ethIcon,
      decimals: 18,
      tokenAddr: tokensByNetwork.ETH,
      crTokenAddr: tokensByNetwork.crETH,
    },
    {
      id: 'FTT',
      label: 'FTT',
      iconUrl: fttIcon,
      decimals: 18,
      tokenAddr: tokensByNetwork.FTT,
      crTokenAddr: tokensByNetwork.crFTT,
    },
    {
      id: 'LINK',
      label: 'LINK',
      iconUrl: linkIcon,
      decimals: 18,
      tokenAddr: tokensByNetwork.LINK,
      crTokenAddr: tokensByNetwork.crLINK,
    },
    {
      id: '1INCH',
      label: '1INCH',
      iconUrl: inchIcon,
      decimals: 18,
      tokenAddr: tokensByNetwork.INCH,
      crTokenAddr: tokensByNetwork.cr1INCH,
    },
    {
      id: 'PERP',
      label: 'PERP',
      decimals: 18,
      tokenAddr: tokensByNetwork.PERP,
      crTokenAddr: tokensByNetwork.crPERP,
    },
    {
      id: 'RUNE',
      label: 'RUNE',
      iconUrl: runeIcon,
      decimals: 18,
      tokenAddr: tokensByNetwork.RUNE,
      crTokenAddr: tokensByNetwork.crRUNE,
    },
    {
      id: 'SUSHI',
      label: 'SUSHI',
      iconUrl: sushiIcon,
      decimals: 18,
      tokenAddr: tokensByNetwork.SUSHI,
      crTokenAddr: tokensByNetwork.crSUSHI,
    },
    {
      id: 'SWAG',
      label: 'SWAG',
      decimals: 18,
      tokenAddr: tokensByNetwork.SWAG,
      crTokenAddr: tokensByNetwork.crSWAG,
    },
    {
      id: 'UNI',
      label: 'UNI',
      iconUrl: uniIcon,
      decimals: 18,
      tokenAddr: tokensByNetwork.UNI,
      crTokenAddr: tokensByNetwork.crUNI,
    },
    {
      id: 'USDC',
      label: 'USDC',
      iconUrl: usdcIcon,
      decimals: 6,
      tokenAddr: tokensByNetwork.USDC,
      crTokenAddr: tokensByNetwork.crUSDC,
    },
    {
      id: 'USDT',
      label: 'USDT',
      iconUrl: usdtIcon,
      decimals: 6,
      tokenAddr: tokensByNetwork.USDT,
      crTokenAddr: tokensByNetwork.crUSDT,
    },
    {
      id: 'WBTC',
      label: 'WBTC',
      iconUrl: wbtcIcon,
      decimals: 8,
      tokenAddr: tokensByNetwork.WBTC,
      crTokenAddr: tokensByNetwork.crWBTC,
    },
    {
      id: 'WNXM',
      label: 'WNXM',
      decimals: 18,
      tokenAddr: tokensByNetwork.WNXM,
      crTokenAddr: tokensByNetwork.crWNXM,
    },
    {
      id: 'XSUSHI',
      label: 'XSUSHI',
      decimals: 18,
      tokenAddr: tokensByNetwork.XSUSHI,
      crTokenAddr: tokensByNetwork.crXSUSHI,
    },
    {
      id: 'YFI',
      label: 'YFI',
      iconUrl: yfiIcon,
      decimals: 18,
      tokenAddr: tokensByNetwork.YFI,
      crTokenAddr: tokensByNetwork.crYFI,
    },
  ];
};
