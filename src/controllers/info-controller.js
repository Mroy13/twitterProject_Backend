import {StatusCodes } from 'http-status-codes';
import SuccessResponse from '../utils/common/success-resposnse.js';
import ErrorResponse from '../utils/common/error-response.js';

export function info(req, res) {
    SuccessResponse.message=["Api is live"];
    return res.status(StatusCodes.OK).json(SuccessResponse);
}
