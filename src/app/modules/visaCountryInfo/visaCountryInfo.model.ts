import { model, Schema } from 'mongoose';
import { TVisaCountryInfo } from './visaCountryInfo.interface';

const visaCountryInfoSchema = new Schema<TVisaCountryInfo>({
  countryName: { type: String, required: true },
  introduction: { type: String, required: true },
  selectCategory: { type: String, required: true },
  organizeDocuments: { type: String, required: true },
  onlineApplicationForm: { type: String, required: true },
  visaType: { type: String, required: true },
  category: { type: [String], required: true },
  scannedDocuments: { type: String, required: true },
  submitApplication: { type: String, required: true },
  payVisaFees: { type: String, required: true },
  biometrics: { type: String, required: true },
  visaDecision: { type: String, required: true },
  conclusion: { type: String, required: true },
});

export const VisaCountryInfo = model<TVisaCountryInfo>(
  'VisaCountryInfo',
  visaCountryInfoSchema,
);
