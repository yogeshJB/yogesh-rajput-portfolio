import { Component } from '@angular/core';

interface TimelineItem {
  role: string;
  organization: string;
  date: string;
  description: string;
  type: 'work' | 'education';
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})

export class ExperienceComponent {
  experiences: TimelineItem[] = [

    {
      role: 'Web/Mobile Application Developer',
      organization: 'BCube Solutions',
      date: '2015 - 2017',
      description: 'Developed and maintained web applications using Cake PHP, Ionic, Cordova, PhoneGap, AngularJS, NodeJS, MySQL',
      // skills: ['Cake PHP', 'Ionic', 'Cordova', 'PhoneGap', 'AngularJS', 'NodeJS', 'MySQL'],
      type: 'work'
    },
    {
      role: 'Sr. Javascript Developer',
      organization: 'Appgambit',
      date: '2017 - Present',
      description: 'Developed and Manage web applications using modern JavaScript AngularJS, Angular, NodeJS, ExpressJS, MongoDB, MySQL, Firebase, AWS cloud platforms.',
      type: 'work'
    },
  ];

  education: TimelineItem[] = [
    {
      role: 'Bachelor of Computer Application (BCA)',
      organization: 'Veer Narmad South Gujarat University (VNSGU)',
      date: '2010 - 2013',
      description: '',
      type: 'education'
    },
    {
      role: 'Master of Science in Information Technology (MSc IT)',
      organization: 'Charotar University of Science and Technology (CHARUSAT)',
      date: '2013 - 2015',
      description: '',
      type: 'education'
    },

  ];
  get mergedTimeline(): TimelineItem[] {
    const allItems = [...this.experiences, ...this.education];
    // Simple parsing for sorting: "Present" -> Current Year, Year Range -> Start Year
    return allItems.sort((a, b) => {
      const getYear = (dateStr: string) => {
        if (dateStr.includes('Present')) return new Date().getFullYear() + 1; // Future
        const match = dateStr.match(/(\d{4})/);
        return match ? parseInt(match[0], 10) : 0;
      };
      return getYear(b.date) - getYear(a.date); // Descending order
    });
  }

  get totalExperience(): number {
    const currentYear = new Date().getFullYear();
    let minYear = currentYear;

    this.experiences.forEach(exp => {
      const matches = exp.date.match(/(\d{4})/);
      if (matches) {
        const startYear = parseInt(matches[0], 10);
        if (startYear < minYear) {
          minYear = startYear;
        }
      }
    });

    return currentYear - minYear;
  }
}
