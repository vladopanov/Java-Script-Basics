var students = [
    {
        'name' : 'Пешо',
        'score' : 91
    },
    {
        'name' : 'Лилия',
        'score' : 290
    },
    {
        'name' : 'Алекс',
        'score' : 343
    },
    {
        'name' : 'Габриела',
        'score' : 400
    },
    {
        'name' : 'Жичка',
        'score' : 70
    }
];

students.forEach(function(student) {
    student.score = (student.score * 1.1).toFixed(1);
    if (student.score >= 100) {
        student.hasPassed = true;
    } else {
        student.hasPassed = false;
    }
});

var passedStudents = students.filter(function(student) {
    return student.hasPassed;
});

console.log(passedStudents.sort(function(a, b) {
    return a.name > b.name;
}));