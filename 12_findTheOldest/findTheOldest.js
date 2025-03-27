/*const findTheOldest = function(people) { 
    
    const currentYear = (new Date().getFullYear);
 

    let oldest = people.sort((a, b) =>  {
        let personA = (a.yearOfDeath ?  a.yearOfDeath : currentYear) - a.yearOfBirth;
        let personB = (b.yearOfDeath ? a.yearOfDeath : currentYear) - b.yearOfBirth;
        return personA - personB;
    });
    
    return oldest[0];


}; */

const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };
  
  const findTheOldest = function (people) {
    return people.reduce((oldest, currentPerson) => {
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
      const currentAge = getAge(
        currentPerson.yearOfBirth,
        currentPerson.yearOfDeath
      );
      return oldestAge < currentAge ? currentPerson : oldest;
    });
  };

// Do not edit below this line
module.exports = findTheOldest;
