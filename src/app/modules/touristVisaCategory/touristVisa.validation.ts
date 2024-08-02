import { z } from 'zod';

const createTouristVisaValidationSchema = z.object({
  body: z.object({
    country: z.string(),
    passport: z.string(),
    photograph: z.string(),
    visaApplicationForm: z.string(),
    coverLater: z.string(),
    forwardingLetter: z.string(),
    residentProofHost: z.string(),
    inviteIdCardUtility: z.string(),
    inviteBankStatements: z.string(),
    officeIdCard: z.string(),
    companyMemorandum: z.string(),
    personalBankStatements: z.string(),
    companyBankStatements: z.string(),
    travelHealthInsurance: z.string(),
  }),
});

const updateTouristVisaValidationSchema = z.object({
  body: z.object({
    country: z.string().optional(),
    category: z.string().optional(),
    passport: z.string().optional(),
    photograph: z.string().optional(),
    visaApplicationForm: z.string().optional(),
    coverLater: z.string().optional(),
    forwardingLetter: z.string().optional(),
    residentProofHost: z.string().optional(),
    inviteIdCardUtility: z.string().optional(),
    inviteBankStatements: z.string().optional(),
    officeIdCard: z.string().optional(),
    companyMemorandum: z.string().optional(),
    personalBankStatements: z.string().optional(),
    companyBankStatements: z.string().optional(),
    travelHealthInsurance: z.string().optional(),
  }),
});

export const TouristVisaValidation = {
  createTouristVisaValidationSchema,
  updateTouristVisaValidationSchema,
};
