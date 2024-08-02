import { TTouristVisa } from './touristVisa.interface';
import { TouristVisa } from './touristVisa.model';

const createTouristVisaIntoDB = async (payload: TTouristVisa) => {
  const result = await TouristVisa.create(payload);
  return result;
};

const getAllTouristVisaFromDB = async () => {
  const result = await TouristVisa.find();
  return result;
};

const updateTouristVisaIntoDB = async (id: string, payload: TTouristVisa) => {
  const result = await TouristVisa.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

const deleteTouristVisaFromDB = async (id: string) => {
  const result = await TouristVisa.findByIdAndDelete(id, {
    new: true,
  });
  return result;
};

export const TouristVisaServices = {
  createTouristVisaIntoDB,
  getAllTouristVisaFromDB,
  updateTouristVisaIntoDB,
  deleteTouristVisaFromDB,
};
