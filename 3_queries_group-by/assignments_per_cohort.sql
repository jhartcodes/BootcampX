SELECT name as student, SUM(duration*) as average_assignment_duration
FROM assignment_submissions
FULL JOIN students ON students.id = student_id
GROUP BY student
ORDER BY average_assignment_duration DESC;