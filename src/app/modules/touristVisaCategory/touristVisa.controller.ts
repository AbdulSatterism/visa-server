import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { TouristVisaServices } from "./touristVisa.service";

const createTouristVisa = catchAsync(async (req, res) => {
    const result = await TouristVisaServices.createTouristVisaIntoDB(
      req.body,
    );
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'tourist visa created successfully',
      data: result,
    });
  });
  
  const getAllTouristVisa = catchAsync(async (req, res) => {
    const result = await TouristVisaServices.getAllTouristVisaFromDB();
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Tourist visa get successfully',
      data: result,
    });
  });
  
  const updateTouristVisa = catchAsync(async (req, res) => {
    const { id } = req.params;
  
    const result = await TouristVisaServices.updateTouristVisaIntoDB(
      id,
      req.body,
    );
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'update Tourist visa successfully',
      data: result,
    });
  });
  
  const deleteTouristVisa = catchAsync(async (req, res) => {
    const { id } = req.params;
  
    const result = await TouristVisaServices.deleteTouristVisaFromDB(id);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'delete tourist visa successfully',
      data: result,
    });
  });

export const TouristVisaControllers={
    createTouristVisa,
    deleteTouristVisa,
    updateTouristVisa,
    getAllTouristVisa
}