import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  typedText = '';
  private fullTextOptions = ['Full Stack Developer', 'Angular Expert', 'Node.js Developer', 'Cloud Architect', 'UI/UX Enthusiast'];
  private currentTextIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typingSpeed = 100;
  private deletingSpeed = 50;
  private pauseBetween = 2000;
  private timer: any;

  ngOnInit() {
    this.startTyping();
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
  }

  private startTyping() {
    const currentFullText = this.fullTextOptions[this.currentTextIndex];

    if (this.isDeleting) {
      this.typedText = currentFullText.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.typedText = currentFullText.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let nextSpeed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

    if (!this.isDeleting && this.charIndex === currentFullText.length) {
      nextSpeed = this.pauseBetween;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.currentTextIndex = (this.currentTextIndex + 1) % this.fullTextOptions.length;
      nextSpeed = 500;
    }

    this.timer = setTimeout(() => this.startTyping(), nextSpeed);
  }
}
