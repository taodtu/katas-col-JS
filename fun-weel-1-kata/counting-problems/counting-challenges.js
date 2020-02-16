const createTally = items => {
  // should produce a tally object from the items in an array
  return items.reduce((a, c) => {
    a[c] = (a[c] || 0) + 1;
    return a;
  }, {})
};

const countVowels = letters => {
  // should return a tally object for the number of vowels
  // in a string of letters
  return letters.split('').reduce((a, c) => {
    if ('aeiou'.includes(c)) {
      a[c] = (a[c] || 0) + 1
    };
    return a;
  }, {})
};

const tallyMPs = MPs => {
  // an typical MP object looks like this:
  /*
    {
        'member_id': '41834',
        'person_id': '10523',
        'name': 'Joan Ryan',
        'party': 'Labour',
        'constituency': 'Enfield North',
        'office': [
                    {
                        'dept': 'Panel of Chairs',
                        'position': 'Member',
                        'from_date': '2017-06-22',
                        'to_date': '9999-12-31'
                                },
                    {
                        'dept': 'Environmental Audit Committee',
                        'position': 'Member',
                        'from_date': '2017-09-11',
                        'to_date': '9999-12-31'
                    }
                ]
    }
    */
  // given an array of objects like this... find the tally
  // of MPs in each party

  /* return MPs.reduce((a, c) => {
    a[c['party']] = (a[c['party']] || 0) + 1;
    return a;
  }, {})*/

  //more reuseable
  const findBy = p => (a, c) => {
    a[c[p]] = (a[c[p]] || 0) + 1;
    return a;
  }

  return MPs.reduce(findBy('party'), {})
}



module.exports = { createTally, countVowels, tallyMPs };
