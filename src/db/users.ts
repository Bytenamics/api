import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true},
    email: { type: String, required: true},
    authentication: {
        password: {type: String, required: true, select: false},
        salt: {type: String, select: false },
        sessionToken: { type: String, select: false },
    }
})

export const Usermodel = mongoose.model('user', UserSchema);

export const getUsers = () => Usermodel.find();
export const getUserByEmail = (email: string) => Usermodel.findOne({email});
export const getUserBySessionToken = (sessionToken: string) => Usermodel.findOne({
    'authentication.sessionToken': getUserBySessionToken,
});
export const getUserById = (id: string) => Usermodel.findById(id);
export const createUser = (values: Record<string, any>) => new Usermodel(values)
.save().then((user) => user.toObject());
export const deleteUserById = (id: string) => Usermodel. findOneAndDelete({_id: id });
export const updateUserById = (id: string, values: Record<string, any>) => Usermodel.findByIdAndUpdate(id, values);