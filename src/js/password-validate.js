import joi from 'joi';

console.log(joi);
const passwordSchema = joi.string().min(3).max(10).alphanum();
export default function validatePassword(password) {
    return passwordSchema.validate(password);
    
}
