console.log("Gonchigsumlai one work day routine");

let activities = [
    ['work', 10],
    ['eat', 1],
    ['speaking', 2],
    ['play', 3],
    ['sleep', 8]
];
console.table(activities);
for(let p = 0; p < activities.length; p++){
        let calcNo = 24 / activities[p][1];
        activities[p].push(((100 / calcNo).toFixed(1)).concat("%"));
}
console.table(activities);