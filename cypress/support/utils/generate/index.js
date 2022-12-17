import generateString from 'randomstring'
export const generateStringEmail = () => `testjb_${generateString.generate(10)}@mail.ru`