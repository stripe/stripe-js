import {StripeElementBase} from './base';
import {StripeError} from '../stripe';

export type StripeTaxIdElement = StripeElementBase & {
  /**
   * The change event is triggered when the `Element`'s value changes.
   */
  on(
    eventType: 'change',
    handler: (event: StripeTaxIdElementChangeEvent) => any
  ): StripeTaxIdElement;
  once(
    eventType: 'change',
    handler: (event: StripeTaxIdElementChangeEvent) => any
  ): StripeTaxIdElement;
  off(
    eventType: 'change',
    handler?: (event: StripeTaxIdElementChangeEvent) => any
  ): StripeTaxIdElement;

  /**
   * Triggered when the element is fully rendered and can accept `element.focus` calls.
   */
  on(
    eventType: 'ready',
    handler: (event: {elementType: 'taxId'}) => any
  ): StripeTaxIdElement;
  once(
    eventType: 'ready',
    handler: (event: {elementType: 'taxId'}) => any
  ): StripeTaxIdElement;
  off(
    eventType: 'ready',
    handler?: (event: {elementType: 'taxId'}) => any
  ): StripeTaxIdElement;

  /**
   * Triggered when the element gains focus.
   */
  on(
    eventType: 'focus',
    handler: (event: {elementType: 'taxId'}) => any
  ): StripeTaxIdElement;
  once(
    eventType: 'focus',
    handler: (event: {elementType: 'taxId'}) => any
  ): StripeTaxIdElement;
  off(
    eventType: 'focus',
    handler?: (event: {elementType: 'taxId'}) => any
  ): StripeTaxIdElement;

  /**
   * Triggered when the element loses focus.
   */
  on(
    eventType: 'blur',
    handler: (event: {elementType: 'taxId'}) => any
  ): StripeTaxIdElement;
  once(
    eventType: 'blur',
    handler: (event: {elementType: 'taxId'}) => any
  ): StripeTaxIdElement;
  off(
    eventType: 'blur',
    handler?: (event: {elementType: 'taxId'}) => any
  ): StripeTaxIdElement;

  /**
   * Triggered when the escape key is pressed within the element.
   */
  on(
    eventType: 'escape',
    handler: (event: {elementType: 'taxId'}) => any
  ): StripeTaxIdElement;
  once(
    eventType: 'escape',
    handler: (event: {elementType: 'taxId'}) => any
  ): StripeTaxIdElement;
  off(
    eventType: 'escape',
    handler?: (event: {elementType: 'taxId'}) => any
  ): StripeTaxIdElement;

  /**
   * Triggered when the element fails to load.
   */
  on(
    eventType: 'loaderror',
    handler: (event: {elementType: 'taxId'; error: StripeError}) => any
  ): StripeTaxIdElement;
  once(
    eventType: 'loaderror',
    handler: (event: {elementType: 'taxId'; error: StripeError}) => any
  ): StripeTaxIdElement;
  off(
    eventType: 'loaderror',
    handler?: (event: {elementType: 'taxId'; error: StripeError}) => any
  ): StripeTaxIdElement;

  /**
   * Triggered when the loader UI is mounted to the DOM and ready to be displayed.
   */
  on(
    eventType: 'loaderstart',
    handler: (event: {elementType: 'taxId'}) => any
  ): StripeTaxIdElement;
  once(
    eventType: 'loaderstart',
    handler: (event: {elementType: 'taxId'}) => any
  ): StripeTaxIdElement;
  off(
    eventType: 'loaderstart',
    handler?: (event: {elementType: 'taxId'}) => any
  ): StripeTaxIdElement;

  /**
   * Updates the options the `TaxIdElement` was initialized with.
   * Updates are merged into the existing configuration.
   */
  update(options: Partial<StripeTaxIdElementOptions>): StripeTaxIdElement;

  /**
   * Validates and retrieves form values from the `AddressElement`.
   */
  getValue(): Promise<StripeTaxIdElementChangeEvent>;
};

export type TaxIdType =
  | 'al_tin'
  | 'am_tin'
  | 'ao_tin'
  | 'at_vat'
  | 'ba_tin'
  | 'bb_tin'
  | 'be_vat'
  | 'bg_vat'
  | 'bs_tin'
  | 'cd_nif'
  | 'cl_tin'
  | 'tr_tin'
  | 'cy_vat'
  | 'cz_vat'
  | 'de_vat'
  | 'dk_vat'
  | 'ee_vat'
  | 'es_vat'
  | 'fi_vat'
  | 'fr_vat'
  | 'gn_nif'
  | 'gr_vat'
  | 'hr_vat'
  | 'th_vat'
  | 'ie_vat'
  | 'it_vat'
  | 'kh_tin'
  | 'lt_vat'
  | 'lu_vat'
  | 'lv_vat'
  | 'me_pib'
  | 'mk_vat'
  | 'mr_nif'
  | 'mt_vat'
  | 'nl_vat'
  | 'np_pan'
  | 'pe_ruc'
  | 'pl_vat'
  | 'pt_vat'
  | 'ro_vat'
  | 'se_vat'
  | 'sa_vat'
  | 'si_vat'
  | 'sk_vat'
  | 'sn_ninea'
  | 'sr_fin'
  | 'tj_tin'
  | 'ug_tin'
  | 'uy_ruc'
  | 'xi_vat'
  | 'zm_tin'
  | 'zw_tin'
  | 'gb_vat'
  | 'nz_gst'
  | 'au_abn'
  | 'no_vat'
  | 'ch_vat'
  | 'mx_rfc'
  | 'hu_vat'
  | 'ca_bn'
  | 'ca_qst'
  | 'ca_gst_hst'
  | 'ca_pst_bc'
  | 'ca_pst_mb'
  | 'ca_pst_sk'
  | 'sg_gst'
  | 'za_vat'
  | 'ru_inn'
  | 'ru_kpp'
  | 'ae_trn'
  | 'is_vat'
  | 'in_gst'
  | 'kr_brn'
  | 'es_cif'
  | 'bh_vat'
  | 'kz_bin'
  | 'ng_tin'
  | 'om_vat'
  | 'ge_vat'
  | 'ke_pin'
  | 'eg_tin'
  | 'tw_vat'
  | 'ua_vat'
  | 'ec_ruc'
  | 'cr_tin'
  | 'tz_vat'
  | 'rs_pib'
  | 'uz_vat'
  | 'uz_tin'
  | 'md_vat'
  | 'ma_vat'
  | 'by_tin'
  | 'li_vat'
  | 'aw_tin'
  | 'az_tin'
  | 'bd_bin'
  | 'bj_ifu'
  | 'et_tin'
  | 'kg_tin'
  | 'la_tin'
  | 'cm_niu'
  | 'cv_nif'
  | 'bf_ifu'
  | 'ph_tin';

export type ExternalTaxIdType =
  | 'eu_vat'
  | 'al_tin'
  | 'am_tin'
  | 'ao_tin'
  | 'ba_tin'
  | 'bb_tin'
  | 'bs_tin'
  | 'cd_nif'
  | 'cl_tin'
  | 'tr_tin'
  | 'th_vat'
  | 'gn_nif'
  | 'kh_tin'
  | 'me_pib'
  | 'mk_vat'
  | 'mr_nif'
  | 'np_pan'
  | 'pe_ruc'
  | 'sa_vat'
  | 'sn_ninea'
  | 'sr_fin'
  | 'tj_tin'
  | 'ug_tin'
  | 'uy_ruc'
  | 'zm_tin'
  | 'zw_tin'
  | 'gb_vat'
  | 'nz_gst'
  | 'au_abn'
  | 'no_vat'
  | 'ch_vat'
  | 'mx_rfc'
  | 'ca_bn'
  | 'ca_qst'
  | 'ca_gst_hst'
  | 'ca_pst_bc'
  | 'ca_pst_mb'
  | 'ca_pst_sk'
  | 'sg_gst'
  | 'za_vat'
  | 'ru_inn'
  | 'ru_kpp'
  | 'ae_trn'
  | 'is_vat'
  | 'in_gst'
  | 'kr_brn'
  | 'es_cif'
  | 'bh_vat'
  | 'kz_bin'
  | 'ng_tin'
  | 'om_vat'
  | 'ge_vat'
  | 'ke_pin'
  | 'eg_tin'
  | 'tw_vat'
  | 'ua_vat'
  | 'ec_ruc'
  | 'cr_tin'
  | 'tz_vat'
  | 'rs_pib'
  | 'uz_vat'
  | 'uz_tin'
  | 'md_vat'
  | 'ma_vat'
  | 'by_tin'
  | 'li_vat'
  | 'aw_tin'
  | 'az_tin'
  | 'bd_bin'
  | 'bj_ifu'
  | 'et_tin'
  | 'kg_tin'
  | 'la_tin'
  | 'cm_niu'
  | 'cv_nif'
  | 'bf_ifu'
  | 'ph_tin';

export interface StripeTaxIdElementOptions {
  /**
   * Control visibility of the TaxIdElement.
   */
  visibility?: 'always' | 'never' | 'auto';

  /**
   * Control which fields to display in the TaxIdElement.
   */
  fields?: {
    businessName?: 'always' | 'never' | 'auto';
  };

  /**
   * Specify validation rules for the given fields.
   */
  validation?: {
    businessName?: {
      required?: 'always' | 'never' | 'auto';
    };
    taxId?: {
      required?: 'always' | 'never' | 'auto';
    };
  };

  /**
   * Default value for TaxIdElement fields
   */
  defaultValues?: {
    businessName?: string;
    taxIdType?: TaxIdType;
    taxId?: string;
  };
}

export interface StripeTaxIdElementChangeEvent {
  /**
   * The type of element that emitted this event.
   */
  elementType: 'taxId';

  /**
   * Whether or not the TaxIdElement is currently empty.
   */
  empty: boolean;

  /**
   * Whether or not the TaxIdElement is complete.
   */
  complete: boolean;

  /**
   * Whether or not the TaxIdElement is visible.
   */
  visible: boolean;

  /**
   * An object containing the current tax id information.
   */
  value: {
    businessName: string;
    taxId: string;
    taxIdType: TaxIdType;
    externalTaxIdType: ExternalTaxIdType;
  };
}
