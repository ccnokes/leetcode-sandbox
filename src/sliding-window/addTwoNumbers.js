
class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

export function arrToLL(arr) {
  let ret;
  let prev = null;
  for (let i = 0; i < arr.length; i++) {
    let curr = new ListNode(arr[i]);
    if (i === 0) {
      ret = curr;
    }
    if (prev != null) {
      prev.next = curr;
    }
    prev = curr;
  }
  // @ts-ignore
  return ret;
}

export function LLtoArr(ll) {
  if (!ll) return [];
  const ret = [];
  let curr = ll;
  while(curr != null) {
    ret.push(curr.val);
    curr = curr.next;
  }
  return ret;
}

export function LLtoString(ll) {
  let ret = '';
  let curr = ll;
  while (curr != null) {
    ret += curr.val;
    curr = curr.next;
  }
  return ret;
}

export default function addTwoNumbers(l1, l2) {
  let l1Current = l1;
  let l2Current = l2;
  let carry = 0;
  let head; // dummy head that's a pointer to next head of returned LL
  let curr = head = new ListNode(0);

  while (l1Current != null || l2Current != null) {
    // calculate
    const a = l1Current && l1Current.val || 0;
    const b = l2Current && l2Current.val || 0;
    let sum = a + b + carry;
    carry = sum > 9 ? 1 : 0;

    // add to LL
    curr.next = new ListNode(sum % 10);

    // reset pointers
    curr = curr.next;
    if (l1Current != null) l1Current = l1Current.next;
    if (l2Current != null) l2Current = l2Current.next;
  }

  // if we still have some leftover, add to end
  if (carry > 0) {
    curr.next = new ListNode(carry);
  }

  return head.next;
}

