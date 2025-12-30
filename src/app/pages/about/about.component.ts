import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  techStack: { name: string; icon: string; startedWork: string, stopWork: string }[] = [
    { name: 'Angular', icon: 'devicon-angularjs-plain', startedWork: '2019', stopWork: '' },
    { name: 'AngularJS', icon: 'devicon-angularjs-plain-wordmark', startedWork: '2016', stopWork: '' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain', startedWork: '2017', stopWork: '' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain', startedWork: '2015', stopWork: '' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain', startedWork: '2019', stopWork: '' },
    { name: 'HTML5', icon: 'devicon-html5-plain', startedWork: '2015', stopWork: '' },
    { name: 'CSS3', icon: 'devicon-css3-plain', startedWork: '2015', stopWork: '' },
    { name: 'Socket.io', icon: 'devicon-socketio-original', startedWork: '2019', stopWork: '' },
    { name: 'Kuzzle.io', icon: 'devicon-kuzzle-original', startedWork: '2020', stopWork: '2025' },
    { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark colored', startedWork: '2020', stopWork: '' },
    { name: 'Serverless', icon: 'devicon-amazonwebservices-plain-wordmark colored', startedWork: '2023', stopWork: '2025' },
    { name: 'Git', icon: 'devicon-git-plain', startedWork: '2016', stopWork: '' },
    { name: 'React.js', icon: 'devicon-react-original', startedWork: '2025', stopWork: '' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original', startedWork: '2025', stopWork: '' },
    { name: 'Prisma', icon: 'devicon-prisma-original', startedWork: '2024', stopWork: '2025' },
    { name: 'Angular Material', icon: 'devicon-angularmaterial-plain', startedWork: '2019', stopWork: '2024' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain', startedWork: '2019', stopWork: '2025' },
    { name: 'MySQL', icon: 'devicon-mysql-plain', startedWork: '2015', stopWork: '2025' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain', startedWork: '2020', stopWork: '2025' },
    { name: 'Ionic', icon: 'devicon-ionic-original', startedWork: '2015', stopWork: '2018' },
    { name: 'React Native', icon: 'devicon-react-original', startedWork: '2019', stopWork: '2018' },
    { name: 'Cake PHP', icon: 'devicon-cakephp-plain colored', startedWork: '2015', stopWork: '2017' },
    // { name: 'OpenAI', icon: 'devicon-openai-plain', startedWork: '' }
  ];

  get totalExperience(): number {
    const startYear = 2015; // Starting from 2015 as per experience data
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
  }

  getTechExperience(tech: { startedWork: string, stopWork: string }): string {
    if (!tech.startedWork) return '';

    const start = parseInt(tech.startedWork, 10);
    const end = tech.stopWork ? parseInt(tech.stopWork, 10) : new Date().getFullYear();

    const diff = end - start;

    if (diff === 0) return '< 1 Year';
    if (diff < 1) return '< 1 Year';

    // For ongoing work, maybe add a "+"
    const suffix = !tech.stopWork ? '+' : '';
    return `${diff}${suffix} Years`;
  }
}
