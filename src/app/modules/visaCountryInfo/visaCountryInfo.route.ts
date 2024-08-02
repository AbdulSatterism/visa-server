import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { VisaCountryInfoControllers } from './visaCountryController';
import { VisaCountryInfoValidations } from './visaCountryInfo.validation';

const router = express.Router();

router.post(
  '/create-visa',
  validateRequest(VisaCountryInfoValidations.createVisaCountryValidationSchema),
  VisaCountryInfoControllers.createVisaCountryInfo,
);
router.put(
  '/:id',
  validateRequest(VisaCountryInfoValidations.updateVisaCountryValidationSchema),
  VisaCountryInfoControllers.updateVisaCountryInfo,
);
router.delete(
  '/:id',

  VisaCountryInfoControllers.deleteVisaCountryInfo,
);

router.get('/', VisaCountryInfoControllers.getAllVisaCountryInfo);

export const VisaCountryInfoRoute = router;
