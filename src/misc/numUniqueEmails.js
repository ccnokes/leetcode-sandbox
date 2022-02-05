// @ts-check
/**

Every valid email consists of a local name and a domain name, separated by the '@' sign. Besides lowercase letters, the email may contain one or more '.' or '+'.

For example, in "alice@leetcode.com", "alice" is the local name, and "leetcode.com" is the domain name.
If you add periods '.' between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name. Note that this rule does not apply to domain names.

For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.
If you add a plus '+' in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered. Note that this rule does not apply to domain names.

For example, "m.y+name@email.com" will be forwarded to "my@email.com".
It is possible to use both of these rules at the same time.

Given an array of strings emails where we send one email to each emails[i], return the number of different addresses that actually receive mails.

 */

/**
 * 
 * @param {string[]} emails
 * @returns {number}
 */
export default function numUniqueEmails(emails) {
  const uniqueEmails = emails.reduce((aggr, email) => {
    const [localName, domainName] = splitEmail(email)
    const parsedEmail = localName + '@' + domainName;
    if (!aggr.has(parsedEmail)) {
      aggr.add(parsedEmail);
    }
    return aggr;
  }, new Set());

  return uniqueEmails.size;
}

/**
 * manually parse email in O(N) linear scan
 * @param {string} str
 * @returns string
 */
function splitEmail(str) {
  let localName = '';
  let localNameComplete = false;
  let domainName = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    // end of the localName
    if (char === '+') {
      localNameComplete = true;
      continue;
    }
    // end of the localName and start of domainName
    if (char === '@') {
      localNameComplete = true;
      domainName = str.slice(i + 1, str.length);
      break;
    }
    // skip `.`
    if (char !== '.' && !localNameComplete) {
      localName += char;
    }
  }
  return [localName, domainName];
}
