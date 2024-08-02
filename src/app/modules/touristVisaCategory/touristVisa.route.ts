import express from 'express';
import { TouristVisaControllers } from './touristVisa.controller';
import validateRequest from '../../middleware/validateRequest';
import { TouristVisaValidation } from './touristVisa.validation';


const router = express.Router();

router.post(
  '/create-tourist-visa',
  validateRequest(TouristVisaValidation.createTouristVisaValidationSchema),
  TouristVisaControllers.createTouristVisa,
);
router.put(
  '/:id',
  validateRequest(TouristVisaValidation.updateTouristVisaValidationSchema),
  TouristVisaControllers.updateTouristVisa,
);
router.delete(
  '/:id',

  TouristVisaControllers.deleteTouristVisa,
);

router.get('/',TouristVisaControllers.getAllTouristVisa);

export const TouristVisaRoute = router;
