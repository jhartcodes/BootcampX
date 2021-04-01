const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = process.argv[2];
const limit = process.argv[3] || 5;
const values = [`%${cohortName}%`, limit];

pool.query(`
SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort 
FROM assistance_requests
JOIN teachers ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name = $1
ORDER BY teachers.name;
`, [`${process.argv[2] || 'JUL02'}`])
  .then(res => {
    // console.log(res.rows)
    res.rows.forEach(user => {
      console.log(`${user.cohort}: ${user.teacher}`)
    })
  })
  .catch(err => console.log('query error ', err.stack));