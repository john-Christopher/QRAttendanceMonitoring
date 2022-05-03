import React from 'react';

function qrCode() {
  const str1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const str2 = "abcdefghijklmnopqrstuvwxyz";
  const str3 = "1234567890";
  const shuffle1 = str1.split('', 5).sort(() => 0.5-Math.random()).join('');
  const shuffle2 = str2.split('', 5).sort(() => 0.5-Math.random()).join('');
  const shuffle3 = str3.split('', 5).sort(() => 0.5-Math.random()).join('');
  const str4 = shuffle1+shuffle2+shuffle3;
  const strCode = str4.split('').sort(() => 0.5-Math.random()).join('');

  return strCode; 
}

export default qrCode;