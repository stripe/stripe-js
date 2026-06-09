import {loadStripe as _loadStripe} from './shared';

export {ReleaseTrain} from './shared';

export const loadStripe: typeof _loadStripe & {
  setLoadParameters: (params: {advancedFraudSignals: boolean}) => void;
};
