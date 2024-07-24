import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const pho = await uploadPhoto();
    const us = await createUser();
    return {
      photo: pho,
      user: us,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
