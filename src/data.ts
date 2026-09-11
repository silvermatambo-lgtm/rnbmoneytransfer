export const company = {
  name: 'R&B Money Transfer',
  tagline: 'Fast • Reliable • Good Rate • 24Hrs',
  promise: 'Secure • Safe • Affordable • Fast',
  website: 'www.rnbmoneytransfer.online',
  contacts: [
    { name: 'Mike', phone: '069 108 4446', tel: '27691084446' },
    { name: 'Ben', phone: '064 264 3742', tel: '27642643742' },
    { name: 'Mussah', phone: '065 908 4603', tel: '27659084603' },
  ]
};

export const defaultRates = {
  withCommission: 255,
  withoutCommission: 245,
  bankReduction: 1,
  updatedAt: new Date().toISOString(),
};

export type Rates = typeof defaultRates;

export function getRates(): Rates {
  try {
    const saved = localStorage.getItem('rnb-rates');
    return saved ? { ...defaultRates, ...JSON.parse(saved) } : defaultRates;
  } catch { return defaultRates; }
}
