const crypto = require('crypto');

const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
  },
});

export function encryptMessage(message) {
  const bufferMessage = Buffer.from(message, 'utf8');
  const encryptedMessage = crypto.publicEncrypt(publicKey, bufferMessage);
  return encryptedMessage.toString('base64');
}

export function decryptMessage(encryptedMessage) {
  const bufferMessage = Buffer.from(encryptedMessage, 'base64');
  const decryptedMessage = crypto.privateDecrypt(privateKey, bufferMessage);
  return decryptedMessage.toString('utf8');
}