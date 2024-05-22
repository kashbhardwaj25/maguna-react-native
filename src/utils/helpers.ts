import { anyPass, complement, isNil, isEmpty, pathOr } from 'ramda';

export const isNilOrEmpty = anyPass([isNil, isEmpty]);
export const isPresent = complement(isNilOrEmpty);

export const getErrorMessageAndCode = (error: unknown, fallbackErrMsg = '') => {
  const apiError = pathOr('', ['response', 'errors'], error);
  if (isPresent(apiError)) {
    error = apiError;
  }
  const serverErrorCode = pathOr('', [0, 'extensions', 'code'], error);
  const errorCode = pathOr('', ['extensions', 'code'], error);
  const code = isPresent(serverErrorCode) ? serverErrorCode : errorCode;

  const serverErrorMessage = pathOr('', [0, 'message'], error);
  const errorMessage = pathOr(fallbackErrMsg, ['message'], error);
  const message = isPresent(serverErrorMessage)
    ? serverErrorMessage
    : errorMessage;

  return {
    code,
    message,
  };
};
