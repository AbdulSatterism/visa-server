import { Types } from 'mongoose';

export type TTouristVisa = {
  country: Types.ObjectId;
  category:string;
  passport: string;
  photograph: string;
  visaApplicationForm: string;
  coverLater: string;
  forwardingLetter: string;
  residentProofHost: string;
  inviteIdCardUtility: string;
  inviteBankStatements: string;
  officeIdCard: string;
  companyMemorandum: string;
  personalBankStatements: string;
  companyBankStatements: string;
  travelHealthInsurance: string;
};
