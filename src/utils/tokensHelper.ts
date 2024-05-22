import {
  getGenericPassword,
  setGenericPassword,
  resetGenericPassword,
} from 'react-native-keychain';

const ACCESS_TOKEN = 'ACCESS_TOKEN';

export async function getAccessToken() {
  try {
    const credentials = await getGenericPassword();
    if (credentials && credentials.username === ACCESS_TOKEN) {
      return credentials.password;
    } else {
      return null;
    }
  } catch (error) {
    console.log(`Could not retrieve token for ${ACCESS_TOKEN}`, error);
    return null;
  }
}

export async function setAccessToken(token: string) {
  try {
    await setGenericPassword(ACCESS_TOKEN, token);
  } catch (error) {
    console.log(`Could not store token for ${ACCESS_TOKEN}`, error);
  }
}

export async function removeAccessToken() {
  try {
    const credentials = await getGenericPassword();

    if (credentials && credentials.username === ACCESS_TOKEN) {
      await resetGenericPassword();
    } else {
    }
  } catch (error) {
    console.log(`Could not remove token for ${ACCESS_TOKEN}`, error);
  }
}
