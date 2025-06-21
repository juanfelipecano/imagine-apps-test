const _users = [
  {
    id: 'user-1',
    fullname: 'John Doe',
    email: 'john@example.com',
    isActive: true,
    courses: [
      {
        id: 'course-9',
        title: 'DevOps Basics',
        description: 'Learn the foundations of CI/CD, Docker, and cloud deployment strategies.',
        duration: 10,
        instructor: 'Olivia White',
      },
      {
        id: 'course-2',
        title: 'Advanced JavaScript',
        description: 'Deep dive into modern JavaScript features including ES6+, closures, and async programming.',
        duration: 4,
        instructor: 'David Smith',
      },
    ],
  },
  {
    id: 'user-2',
    fullname: 'Jane Smith',
    email: 'jane@example.com',
    isActive: false,
    courses: [
      {
        id: 'course-5',
        title: 'Python Programming',
        description: 'Learn Python syntax, data structures, and build small projects with it.',
        duration: 6,
        instructor: 'Sarah Lee',
      },
    ],
  },
  {
    id: 'user-3',
    fullname: 'Carlos Martinez',
    email: 'carlos@example.com',
    isActive: true,
    courses: [
      {
        id: 'course-3',
        title: 'React Fundamentals',
        description: 'Understand the core concepts of React including components, hooks, and state management.',
        duration: 3,
        instructor: 'Emma Davis',
      },
      {
        id: 'course-7',
        title: 'UI/UX Design Principles',
        description: 'Explore the fundamentals of user interface and user experience design.',
        duration: 6,
        instructor: 'Laura Martin',
      },
      {
        id: 'course-14',
        title: 'Agile Project Management',
        description: 'Explore agile methodologies like Scrum and Kanban for team productivity.',
        duration: 4,
        instructor: 'Ethan Hall',
      },
    ],
  },
  {
    id: 'user-4',
    fullname: 'Emily Nguyen',
    email: 'emily@example.com',
    isActive: true,
    courses: [
      {
        id: 'course-4',
        title: 'Node.js for Beginners',
        description: 'Get started with server-side JavaScript using Node.js and Express.',
        duration: 3,
        instructor: 'Michael Thompson',
      },
    ],
  },
  {
    id: 'user-5',
    fullname: 'Liam Brown',
    email: 'liam@example.com',
    isActive: false,
    courses: [
      {
        id: 'course-1',
        title: 'Introduction to Web Development',
        description: 'Learn the basics of HTML, CSS, and JavaScript to build your first websites.',
        duration: 2,
        instructor: 'Alice Johnson',
      },
      {
        id: 'course-12',
        title: 'TypeScript from Scratch',
        description: 'Learn TypeScript to write safer and more robust JavaScript applications.',
        duration: 8,
        instructor: 'Benjamin Lewis',
      },
    ],
  },
  {
    id: 'user-6',
    fullname: 'Sophia Gonzalez',
    email: 'sophia@example.com',
    isActive: true,
    courses: [
      {
        id: 'course-13',
        title: 'Cybersecurity Fundamentals',
        description: 'Understand common threats, vulnerabilities, and best practices in cybersecurity.',
        duration: 3,
        instructor: 'Chloe Walker',
      },
      {
        id: 'course-6',
        title: 'Data Structures and Algorithms',
        description: 'Understand essential algorithms and data structures for technical interviews.',
        duration: 8,
        instructor: 'James Anderson',
      },
    ],
  },
  {
    id: 'user-7',
    fullname: 'Noah Lee',
    email: 'noah@example.com',
    isActive: true,
    courses: [
      {
        id: 'course-11',
        title: 'Database Design and SQL',
        description: 'Master relational database concepts and SQL for querying data.',
        duration: 8,
        instructor: 'Sophia Clark',
      },
      {
        id: 'course-8',
        title: 'Mobile App Development with Flutter',
        description: 'Build beautiful cross-platform mobile apps using Flutter and Dart.',
        duration: 6,
        instructor: 'Chris Wilson',
      },
    ],
  },
  {
    id: 'user-8',
    fullname: 'Ava Wilson',
    email: 'ava@example.com',
    isActive: false,
    courses: [
      {
        id: 'course-10',
        title: 'Machine Learning Essentials',
        description: 'Get introduced to machine learning concepts and build your first ML models.',
        duration: 10,
        instructor: 'Daniel Kim',
      },
    ],
  },
  {
    id: 'user-9',
    fullname: 'Lucas Taylor',
    email: 'lucas@example.com',
    isActive: true,
    courses: [
      {
        id: 'course-2',
        title: 'Advanced JavaScript',
        description: 'Deep dive into modern JavaScript features including ES6+, closures, and async programming.',
        duration: 4,
        instructor: 'David Smith',
      },
      {
        id: 'course-9',
        title: 'DevOps Basics',
        description: 'Learn the foundations of CI/CD, Docker, and cloud deployment strategies.',
        duration: 10,
        instructor: 'Olivia White',
      },
    ],
  },
  {
    id: 'user-10',
    fullname: 'Isabella Harris',
    email: 'isabella@example.com',
    isActive: true,
    courses: [
      {
        id: 'course-3',
        title: 'React Fundamentals',
        description: 'Understand the core concepts of React including components, hooks, and state management.',
        duration: 3,
        instructor: 'Emma Davis',
      },
    ],
  },
  {
    id: 'user-11',
    fullname: 'Ethan Walker',
    email: 'ethan@example.com',
    isActive: true,
    courses: [
      {
        id: 'course-7',
        title: 'UI/UX Design Principles',
        description: 'Explore the fundamentals of user interface and user experience design.',
        duration: 6,
        instructor: 'Laura Martin',
      },
      {
        id: 'course-15',
        title: 'Cloud Computing with AWS',
        description: 'Learn core AWS services and how to deploy applications in the cloud.',
        duration: 6,
        instructor: 'Grace Robinson',
      },
    ],
  },
  {
    id: 'user-12',
    fullname: 'Mia Robinson',
    email: 'mia@example.com',
    isActive: true,
    courses: [],
  },
];

export default _users;
