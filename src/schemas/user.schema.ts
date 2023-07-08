import * as mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

export const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {
    versionKey: false,
  });
UserSchema.plugin(passportLocalMongoose);
