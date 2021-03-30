SELECT sum(assignment_submissions.duration) as total_duration
FROM assignment_submissions
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name = 'FEB12';



-- SELECT students.name, cohorts.name, cohorts.start_date as cohort_start_date, students.start_date as student_start_date
-- FROM students
-- JOIN cohorts ON cohort_id = cohorts.id
-- WHERE cohorts.start_date != students.start_date
-- ORDER BY cohort_start_date;
