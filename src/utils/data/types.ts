export type QEDataRes = {
  firstName: string;
  lastName: string;
  rawPayload: string;
};

export type QERawResponse = {
  streetAddressLine1: string;
  city: string;
  state: string;
  zipCode: string;
  estimatedHomeValue: number;
  mortgageBalance: number;
  desiredCashout: number;
  phoneNumber: string;
  propertyType: string;
  [key: string]: string | number;
};
