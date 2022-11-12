const header = {
  homepage: 'https://laurabrooks.github.io/',
  title: 'LB.',
}

const about = {
  name: 'Laura Brooks',
  role: 'Full Stack Developer',
  description: 'I\'m based in Washington DC and currently a Senior Software Engineer and Tech Lead at Capital One. I\'m an AWS Certified Solutions Architect and build full stack applications.',
  resume: 'https://laurabrooks.github.io/resume.html',
  social: {
    linkedin: 'https://www.linkedin.com/in/laura-a-brooks/',
    github: 'https://github.com/laurabrooks',
  },
}

const projects = [
  {
    name: 'Asteroids',
    description:
      'Game developed using the p5.js visualization library. Press \'c\' while playing for a surprise.',
    stack: ['Javascript', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/laurabrooks/asteroids',
    livePreview: 'https://laurabrooks.github.io/asteroids/',
  },
  {
    name: 'Campaign Finance Visualization',
    description:
      'Campaign Finance data visualization project based on 2015 presidential campaign data.',
    stack: ['Javascript', 'HTML', 'CSS', 'D3.js', 'Data Viz'],
    sourceCode: 'https://github.com/laurabrooks/campaignviz',
    livePreview: 'https://laurabrooks.github.io/campaignviz/#',
  },
  {
    name: 'Ansible Galaxy Redesign',
    description:
      'For my Senior Capstone project partnered with Red Hat, I worked with a team to conduct human factors research and design an improved UI for Ansible Galaxy. See the full process and results, documented by my teammate.',
    livePreview: 'https://jacobcaccamo.com/redhat-ansible-galaxy/',
  },
]

const skills = [
  'JavaScript',
  'AWS',
  'Node.js',
  'Vue',
  'React',
  'Redux',
  'Python',
  'Java',
  'CI/CD',
  'Git',
  'Agile',
]

const contact = {
  email: 'itslaurabrooks@gmail.com',
}

export { header, about, projects, skills, contact }
