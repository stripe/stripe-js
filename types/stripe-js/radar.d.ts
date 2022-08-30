import * as api from '../api';

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