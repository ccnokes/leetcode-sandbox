/**

Our overall goal is to create a feature
for quickly finding matches based on their tags for a dating app.

While we only have eight singles in our example data,
we should assume that the full dataset we receive
would be 1M+ records with ~50 labels.

Ensure the consumer of our function will receive:

- `Belda` for finding someone who `adventurous`
- `Emma` and `Adrien` for finding someone `interested_in_men`
 */

const input = [
  ['Matt', 'adventurous,likes_dogs,interested_in_women,looking_for_fun'],
  ['Belda', 'adventurous,looking_for_marriage,female'],
  ['Wyatt', 'likes_dogs,interested_in_women,looking_for_fun'],
  ['Emma', 'adventurous,interested_in_men'],
  ['Aaron', 'has_tatoo,likes_dogs'],
  ['Josh', 'adventurous,looking_for_marriage,looking_for_fun'],
  ['Adrien', 'interested_in_men,adventurous,looking_for_fun'],
  ['Andy', 'looking_for_marriage,interested_in_women,has_tatoo'],
];

// API: label[] -> person[]
// Map<label, person[]> -- fast lookups

function buildMap(): Map<string, Set<string>> {
  return input.reduce((aggr, [person, labelStr]) => {
    const labels = labelStr.split(',');

    labels.forEach((label) => {
      if (aggr.has(label)) {
        const cachedLabel = aggr.get(label);
        cachedLabel.add(person);
        aggr.set(label, cachedLabel);
      } else {
        aggr.set(label, new Set([person]));
      }
    });

    return aggr;
  }, new Map());
}

const map = buildMap();

// AND not OR on the labels
function findMatchingPeople(labels: string[]): string[] {
  const people = labels.map((label) => map.get(label) ?? new Set<string>());
  if (people.length == 0) {
    return [];
  }

  // need intersection of all the Sets (assume Set.prototype.intersection isn't available)
  const ret = people.slice(1).reduce((set, result) => {
    set.forEach((person) => {
      if (!result.has(person)) {
        set.delete(person);
      }
    });
    return set;
  }, new Set(people[0]));

  return Array.from(ret);
}

console.log(findMatchingPeople(['interested_in_women', 'looking_for_fun'])); // Matt, Wyatt
