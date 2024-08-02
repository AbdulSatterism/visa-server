import { z } from 'zod';

const createVisaCountryValidationSchema = z.object({
  body: z.object({
    countryName: z.string(),
    introduction: z.string(),
    selectCategory: z.string(),
    organizeDocuments: z.string(),
    onlineApplicationForm: z.string(),
    visaType: z.string(),
    category: z.array(z.string()),
    scannedDocuments: z.string(),
    submitApplication: z.string(),
    payVisaFees: z.string(),
    biometrics: z.string(),
    visaDecision: z.string(),
    conclusion: z.string(),
  }),
});

const updateVisaCountryValidationSchema = z.object({
  body: z.object({
    countryName: z.string().optional(),
    introduction: z.string().optional(),
    selectCategory: z.string().optional(),
    organizeDocuments: z.string().optional(),
    onlineApplicationForm: z.string().optional(),
    visaType: z.string().optional(),
    category: z.array(z.string()).optional(),
    scannedDocuments: z.string().optional(),
    submitApplication: z.string().optional(),
    payVisaFees: z.string().optional(),
    biometrics: z.string().optional(),
    visaDecision: z.string().optional(),
    conclusion: z.string().optional(),
  }),
});

export const VisaCountryInfoValidations = {
  createVisaCountryValidationSchema,
  updateVisaCountryValidationSchema
};
