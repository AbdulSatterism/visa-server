import { TVisaCountryInfo } from './visaCountryInfo.interface';
import { VisaCountryInfo } from './visaCountryInfo.model';

const createVisaCountryInfoIntoDB = async (payload: TVisaCountryInfo) => {
  const result = await VisaCountryInfo.create(payload);
  return result;
};

const getAllVisaCountryInfoFromDB = async () => {
  const result = await VisaCountryInfo.find();
  return result;
};

const updateVisaCountryInfoFromDB = async (
  id: string,
  payload: TVisaCountryInfo,
) => {
  const result = await VisaCountryInfo.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

const deleteVisaCountryInfoFromDB = async (
  id: string,
) => {
  const result = await VisaCountryInfo.findByIdAndDelete(id, {
    new: true,
  });
  return result;
};

export const VisaCountryInfoServices = {
  createVisaCountryInfoIntoDB,
  getAllVisaCountryInfoFromDB,
  updateVisaCountryInfoFromDB,
  deleteVisaCountryInfoFromDB
};
