import { Router } from 'express';
import { VisaCountryInfoRoute } from '../modules/visaCountryInfo/visaCountryInfo.route';
import { TouristVisaRoute } from '../modules/touristVisaCategory/touristVisa.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/visa',
    route: VisaCountryInfoRoute,
  },
  {
    path: '/tourist-visa',
    route: TouristVisaRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
