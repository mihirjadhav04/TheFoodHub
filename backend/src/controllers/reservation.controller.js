import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
// import { User } from "../models/user.model.js"
import { ApiResponse } from "../utils/APIResponse.js";
import { Reservation } from "../models/reservation.models.js"

const sendReservation = asyncHandler( async(req, res) => {
    console.log(req.body);
    const {firstname,lastname, email, phone} = req.body

    if (
        [firstname, email, lastname, phone].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const reservation = await Reservation.create({
        firstname,
        lastname,
        email,
        phone
    }) 


     //check if user reservation is created of user - extra db call but fullproof
     const createdUserReservation = await Reservation.findById(reservation._id)

    if (!createdUserReservation){
        throw new ApiError(500, "Something went wrong while doing the user reservation.")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUserReservation, "User reservation done successfully!")
    )


})


export { sendReservation }