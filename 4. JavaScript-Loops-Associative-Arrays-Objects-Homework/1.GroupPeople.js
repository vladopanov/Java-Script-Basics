function Person(firstName, lastName, age) {
    var person = {firstName : firstName, lastName : lastName, age : age};
    return person;
}

var people = [
    new Person("Scott", "Guthrie", 38),
    new Person("Scott", "Johns", 36),
    new Person("Scott", "Hanselman", 39),
    new Person("Jesse", "Liberty", 57),
    new Person("Jon", "Skeet", 38)
];

function groupBy(criteria) {
    var groupedPeople = {};

    switch (criteria) {
        case 'firstName':
            for (var p in people) {
                var fName = people[p].firstName;
                var lName = people[p].lastName;
                var a = people[p].age;

                if (!(groupedPeople.hasOwnProperty(fName))) {
                    groupedPeople[fName] = new Array(fName + ' ' + lName + '(age ' + a + ')');
                } else {
                    groupedPeople[fName].push(fName + ' ' + lName + '(age ' + a + ')');
                }
            }
            break;
        case 'age':
            for (var p in people) {
                var fName = people[p].firstName;
                var lName = people[p].lastName;
                var a = people[p].age;

                if (!(groupedPeople.hasOwnProperty(a))) {
                    groupedPeople[a] = new Array(fName + ' ' + lName + '(age ' + a + ')');
                } else {
                    groupedPeople[a].push(fName + ' ' + lName + '(age ' + a + ')');
                }
            }
            break;
        case 'lastName':
            for (var p in people) {
                var fName = people[p].firstName;
                var lName = people[p].lastName;
                var a = people[p].age;

                if (!(groupedPeople.hasOwnProperty(lName))) {
                    groupedPeople[lName] = new Array(fName + ' ' + lName + '(age ' + a + ')');
                } else {
                    groupedPeople[lName].push(fName + ' ' + lName + '(age ' + a + ')');
                }
            }
            break;
    }

    for (var group in groupedPeople) {
        console.log('Group ' + group + ' : [' + groupedPeople[group].join(', ') + ']');
    }
    console.log();
}

groupBy('firstName');
groupBy('age');
groupBy('lastName');