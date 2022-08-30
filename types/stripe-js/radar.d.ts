import * as api from '../api';

/* A Radar Session is a snapshot of the browser metadata and device details that helps Radar make more accurate predictions on your payments. 
This metadata includes information like IP address, browser, screen or device information, and other device characteristics. 
You can find more details about how Radar uses this data by reading about how Radar performs [advanced fraud detection](https://stripe.com/docs/disputes/prevention/advanced-fraud-detection).
*/
export type RadarSessionPayload =
  | {radarSession: Record<any, any>; error?: undefined}
  | {radarSession?: undefined; error: LocalizedError};

export type LocalizedError = {
  message: string;
  code?: string;
  type?: string;
  decline_code?: string;
  param?: string;
  payment_intent?: api.PaymentIntent;
  setup_intent?: api.SetupIntent;
  status?: number;
  extra_fields?: {
    [key: string]: string | number | boolean;
  };
  order?: api.Order;
};
