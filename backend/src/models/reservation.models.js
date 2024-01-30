import mongoose, {Schema} from "mongoose";
import validator from "validator";


const reservationSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        minLength: [3, "First name must contain atleast 3 characters."],
        maxLength: [30, "First name cannot exceed 30 characters."]
    },
    lastname: {
        type: String,
        required: true,
        minLength: [3, "Last name must contain atleast 3 characters."],
        maxLength: [30, "Last name cannot exceed 30 characters."]
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validator: [validator.isEmail, "Provide a valid email!"]
    },
    phone: {
        type: String,
        required: true,
        // unique: true,
        minLength: [10, "Phone number must be of 10 digits"],
        maxLength: [10, "Phone number must be of 10 digits"],
    }
    // time: {
    //     type: String,
    //     required: true
    // },
    // date: {
    //     type: String,
    //     required: true
    // }

}, {timestamps: true})


export const Reservation = mongoose.model("Reservation",reservationSchema)