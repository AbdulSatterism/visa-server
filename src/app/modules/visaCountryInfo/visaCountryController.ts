import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { VisaCountryInfoServices } from './visaCountryService';
import catchAsync from '../../utils/catchAsync';

const createVisaCountryInfo = catchAsync(async (req, res) => {
  const result = await VisaCountryInfoServices.createVisaCountryInfoIntoDB(
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'country visa information created successfully',
    data: result,
  });
});

const getAllVisaCountryInfo = catchAsync(async (req, res) => {
  const result = await VisaCountryInfoServices.getAllVisaCountryInfoFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'country visa get successfully successfully',
    data: result,
  });
});

const updateVisaCountryInfo = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await VisaCountryInfoServices.updateVisaCountryInfoFromDB(
    id,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'update successfully successfully',
    data: result,
  });
});

const deleteVisaCountryInfo = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await VisaCountryInfoServices.deleteVisaCountryInfoFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'delete successfully successfully',
    data: result,
  });
});

export const VisaCountryInfoControllers = {
  createVisaCountryInfo,
  getAllVisaCountryInfo,
  updateVisaCountryInfo,
  deleteVisaCountryInfo,
};
