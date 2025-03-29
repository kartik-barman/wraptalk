import { ApiError } from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";

const checkApiKey = asyncHandler(async (req, res, next) => {
    const key = req.query.key;

    // if (!key || key !== process.env.API_KEY) {
    //     return next(new ApiError(401, "Unauthorized"));
    // }

    next();
});

export default checkApiKey;