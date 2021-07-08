/**
 * https://github.com/felipe-gustavo/wipro-code-challenge/tree/master/challenge-functions#1st-challenge-getvaluebypath
 *
 * @param {object} value Object to extract value
 * @param {string} path Path where are the value
 * @returns {{ has: boolean, value: any }}
 */
function getValueByPath(value, path) {
  return {
    has: true,
    value: 1,
  };
}

export default getValueByPath;
