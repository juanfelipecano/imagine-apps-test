import { useMemo } from 'react';
import { Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import _courses from '../../../../_mocks/courses';
import _users from '../../../../_mocks/users';
import styles from './Dashboard.module.css';

export const Dashboard = () => {
  const totalCourses = _courses.length;
  const activeUsers = _users.filter(u => u.isActive).length;
  const totalEnrollments = _users.reduce((acc, user) => acc + user.courses.length, 0);

  const metricsData = useMemo(() => {
    const generateRandom = () => Math.floor(Math.random() * 30) + 5;

    return [
      { period: 'Today', users: generateRandom(), enrollments: generateRandom() },
      { period: 'This Week', users: generateRandom(), enrollments: generateRandom() },
      { period: 'This Month', users: generateRandom(), enrollments: generateRandom() },
      { period: 'This Year', users: generateRandom(), enrollments: generateRandom() },
    ];
  }, []);

  return (
    <section className={ styles.dashboard }>
      <h1>Dashboard</h1>
      <br />

      <div className={ styles.stats }>
        <div className={ styles.card }>
          <h2>Total Courses</h2>
          <p>{ totalCourses }</p>
        </div>
        <div className={ styles.card }>
          <h2>Active Users</h2>
          <p>{ activeUsers }</p>
        </div>
        <div className={ styles.card }>
          <h2>Total Enrollments</h2>
          <p>{ totalEnrollments }</p>
        </div>
      </div>

      <PieChart width={ 400 } height={ 250 }>
        <Pie
          data={[
            { name: 'Courses', value: totalCourses },
            { name: 'Active Users', value: activeUsers },
            { name: 'Enrollments', value: totalEnrollments },
          ]}
          cx="50%"
          cy="50%"
          outerRadius={ 80 }
          fill="#8884d8"
          label
          dataKey="value"
        >
          <Cell fill="#8884d8" />
          <Cell fill="#82ca9d" />
          <Cell fill="#ffc658" />
        </Pie>
        <Tooltip />
      </PieChart>

      <div className={ styles.chart }>
        <h2>Metrics</h2>
        <br />
        <ResponsiveContainer width="100%" height={ 300 }>
          <BarChart data={ metricsData } margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="period" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="users" fill="#8884d8" name="Users" />
            <Bar dataKey="enrollments" fill="#82ca9d" name="Enrollments" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};
