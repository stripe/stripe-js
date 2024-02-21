import {loadStripe as _loadStripe} from './index';

export const loadStripe: typeof _loadStripe & {
  setLoadParameters: (params: {advancedFraudSignals: boolean}) => void;
};
