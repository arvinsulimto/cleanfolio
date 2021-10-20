const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://arvinsulimto.github.io',
  title: 'AS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Arvin Sulimto',
  role: 'Full Stack Developer',
  description:
    'Currently i am a Software Engineer - Engineering Productivity at Tokopedia and i love to explore anything especially in technology and finanical literacy',
  resume: 'https://drive.google.com/file/d/1lXawmTPRRDCv685LbE21e7U6JgVx8pA6/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/arvin-sulimto-b48657170/',
    github: 'https://github.com/arvinsulimto',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Scopus',
    description:
      'Scopus is a web application for staff and lecturer at Binus University to request funding about scientific journals',
    stack: [],
    imageURL: "https://1.bp.blogspot.com/-ubZ9dGTHkeo/YJEZqDJbLII/AAAAAAAAE5s/KnA48vbj4ykbbdNVIHBbLbLWxf2NIrn_QCLcBGAsYHQ/s1600/Logo%2BBinus%2BUniversity.png",
    sourceCode: '',
    livePreview: 'https://scopus.apps.binus.ac.id/',
  },
  {
    name: 'Florist',
    description:
      'Florist is a web application for manage flowers stock                                                              ',
    stack: [],
    imageURL: "https://images.vexels.com/media/users/3/142933/isolated/preview/b853f0361b87a27a6fc2c5bd1160b867-flat-flower-doodle.png",
    sourceCode: 'https://github.com/arvinsulimto/Florist',
    livePreview: '',
  },
  {
    name: 'Movie Catalogue',
    description:
      'Movie Catalogue is an android application for view list movies',
    stack: [],
    imageURL : 'https://4.bp.blogspot.com/-7HVtWADgOro/V_X0OAM8yhI/AAAAAAAAAGE/A50g9sBOl1UhjOXVOBaBav2tEMT6xhi5QCLcB/s200/clapboard_clapper_cinema_movie_film_production_clap_video_action_play_cinematography_studio_industry_hollywood_premiere_flat_design_icon-512.png',
    sourceCode: 'https://github.com/arvinsulimto/MovieCatalogue',
    livePreview: '',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Web Development',
  'Android Development',
  'Java',
  '.NET Core',
  'SQL',
  'PHP',
  'React',
  'Javascript',
  'HTML',
  'CSS',
  'C/C++',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'arvinsulimto@gmail.com',
}

export { header, about, projects, skills, contact }
