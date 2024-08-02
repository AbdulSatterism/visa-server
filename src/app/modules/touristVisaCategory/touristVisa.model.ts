import { model, Schema } from 'mongoose';
import { TTouristVisa } from './touristVisa.interface';

const touristVisaSchema = new Schema<TTouristVisa>({
  country: {
    type: Schema.Types.ObjectId,
    ref: 'VisaCountryInfo',
    required: true,
  },
  passport: { type: String, required: true },
  category: { type: String, default: 'Tourist' },
  photograph: { type: String, required: true },
  visaApplicationForm: { type: String, required: true },
  coverLater: { type: String, required: true },
  forwardingLetter: { type: String, required: true },
  residentProofHost: { type: String, required: true },
  inviteIdCardUtility: { type: String, required: true },
  inviteBankStatements: { type: String, required: true },
  officeIdCard: { type: String, required: true },
  companyMemorandum: { type: String, required: true },
  personalBankStatements: { type: String, required: true },
  companyBankStatements: { type: String, required: true },
  travelHealthInsurance: { type: String, required: true },
});

export const TouristVisa = model<TTouristVisa>(
  'TouristVisa',
  touristVisaSchema,
);
