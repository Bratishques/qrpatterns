//
// HELPERS
//
const t = (string) => string;
const asOptions = (l10nMap) =>
  Object.keys(l10nMap).map((key) => ({
    label: l10nMap[key],
    value: key
  }));

//
// PROCESSING METHODS
//
export const PROCESSING_METHOD_NATURAL = 'NATURAL';
export const PROCESSING_METHOD_SEMI_WASHED = 'SEMI_WASHED';
export const PROCESSING_METHOD_FULLY_WASHED = 'FULLY_WASHED';
export const PROCESSING_METHOD_PULPED_NATURAL = 'PULPED_NATURAL';
export const PROCESSING_METHOD_HONEY = 'HONEY';
export const PROCESSING_METHOD_MISC = 'MISC';
export const PROCESSING_METHOD_OTHER = 'OTHER';

export const PROCESSING_METHOD_L10N = {
  [PROCESSING_METHOD_NATURAL]: t('Natural'),
  [PROCESSING_METHOD_SEMI_WASHED]: t('Semi washed'),
  [PROCESSING_METHOD_FULLY_WASHED]: t('Fully washed'),
  [PROCESSING_METHOD_PULPED_NATURAL]: t('Pulped natural'),
  [PROCESSING_METHOD_HONEY]: t('Honey'),
  [PROCESSING_METHOD_MISC]: t('Miscellaneous'),
  [PROCESSING_METHOD_OTHER]: t('Other')
};

export const PROCESSING_METHOD_OPTIONS = asOptions(PROCESSING_METHOD_L10N);

//
// WEIGHT UNITS
//
export const WEIGHT_UNIT_G = 'G';
export const WEIGHT_UNIT_KG = 'KG';
export const WEIGHT_UNIT_LBS = 'LBS';
export const WEIGHT_UNIT_BARREL15KG = 'BARREL15KG';
export const WEIGHT_UNIT_BOX12_1KG = 'BOX12_1KG';
export const WEIGHT_UNIT_BOX24KG = 'BOX24KG';
export const WEIGHT_UNIT_BOX24_2KG = 'BOX24_2KG';
export const WEIGHT_UNIT_BOX25KG = 'BOX25KG';
export const WEIGHT_UNIT_BOX30KG = 'BOX30KG';
export const WEIGHT_UNIT_BOX35KG = 'BOX35KG';
export const WEIGHT_UNIT_BOX65LBS = 'BOX65LBS';
export const WEIGHT_UNIT_BAG10KG = 'BAG10KG';
export const WEIGHT_UNIT_BAG15KG = 'BAG15KG';
export const WEIGHT_UNIT_BAG17KG = 'BAG17KG';
export const WEIGHT_UNIT_BAG20KG = 'BAG20KG';
export const WEIGHT_UNIT_BAG25KG = 'BAG25KG';
export const WEIGHT_UNIT_BAG30KG = 'BAG30KG';
export const WEIGHT_UNIT_BAG35KG = 'BAG35KG';
export const WEIGHT_UNIT_BAG45KG = 'BAG45KG';
export const WEIGHT_UNIT_BAG46KG = 'BAG46KG';
export const WEIGHT_UNIT_BAG50KG = 'BAG50KG';
export const WEIGHT_UNIT_BAG59KG = 'BAG59KG';
export const WEIGHT_UNIT_BAG60KG = 'BAG60KG';
export const WEIGHT_UNIT_BAG62_5KG = 'BAG62_5KG';
export const WEIGHT_UNIT_BAG64KG = 'BAG64KG';
export const WEIGHT_UNIT_BAG68KG = 'BAG68KG';
export const WEIGHT_UNIT_BAG69KG = 'BAG69KG';
export const WEIGHT_UNIT_BAG70KG = 'BAG70KG';
export const WEIGHT_UNIT_BAG50LBS = 'BAG50LBS';
export const WEIGHT_UNIT_BAG100LBS = 'BAG100LBS';

export const WEIGHT_UNIT_L10N = {
  [WEIGHT_UNIT_G]: t('g'),
  [WEIGHT_UNIT_KG]: t('kg'),
  [WEIGHT_UNIT_LBS]: t('lbs'),
  [WEIGHT_UNIT_BARREL15KG]: t('15kg barrel'),
  [WEIGHT_UNIT_BOX12_1KG]: t('12.1kg box'),
  [WEIGHT_UNIT_BOX24KG]: t('24kg box'),
  [WEIGHT_UNIT_BOX24_2KG]: t('24.2kg box'),
  [WEIGHT_UNIT_BOX25KG]: t('25kg box'),
  [WEIGHT_UNIT_BOX30KG]: t('30kg box'),
  [WEIGHT_UNIT_BOX35KG]: t('35kg box'),
  [WEIGHT_UNIT_BOX65LBS]: t('65lb box'),
  [WEIGHT_UNIT_BAG10KG]: t('10kg bag'),
  [WEIGHT_UNIT_BAG15KG]: t('15kg bag'),
  [WEIGHT_UNIT_BAG17KG]: t('17kg bag'),
  [WEIGHT_UNIT_BAG20KG]: t('20kg bag'),
  [WEIGHT_UNIT_BAG25KG]: t('25kg bag'),
  [WEIGHT_UNIT_BAG30KG]: t('30kg bag'),
  [WEIGHT_UNIT_BAG35KG]: t('35kg bag'),
  [WEIGHT_UNIT_BAG45KG]: t('45kg bag'),
  [WEIGHT_UNIT_BAG46KG]: t('46kg bag'),
  [WEIGHT_UNIT_BAG50KG]: t('50kg bag'),
  [WEIGHT_UNIT_BAG59KG]: t('59kg bag'),
  [WEIGHT_UNIT_BAG60KG]: t('60kg bag'),
  [WEIGHT_UNIT_BAG62_5KG]: t('62.5kg bag'),
  [WEIGHT_UNIT_BAG64KG]: t('64kg bag'),
  [WEIGHT_UNIT_BAG68KG]: t('68kg bag'),
  [WEIGHT_UNIT_BAG69KG]: t('69kg bag'),
  [WEIGHT_UNIT_BAG70KG]: t('70kg bag'),
  [WEIGHT_UNIT_BAG50LBS]: t('50lb bag'),
  [WEIGHT_UNIT_BAG100LBS]: t('100lb bag')
};

export const WEIGHT_UNIT_OPTIONS = asOptions(WEIGHT_UNIT_L10N);
