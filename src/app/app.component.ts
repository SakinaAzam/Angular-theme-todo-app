import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-todo-list';
   theme: string = '#FFFFFF'; // Default to white
    images: string[] = [
    'assets/themepic.jpg',
    'assets/themepic1.jpg',
    'assets/themepic2.jpg',
    'assets/themepic3.jpg',
    'assets/themepic4.jpg',
    'assets/themepic5.jpg',
    'assets/themepic6.jpg',
    'assets/themepi7.jpg',
    'assets/themepic8.jpg',
    'assets/themepic9.jpg',
    'assets/themepic10.jpg',
  ]; 

  currentImageIndex: number = 0;
  imageUrl: string = this.images[this.currentImageIndex];

  changeImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.imageUrl = this.images[this.currentImageIndex];
  }
  // changeTheme() {
  //   this.theme = this.getRandomColor();
  // }

  // getRandomColor(): string {
  //   const letters = '0123456789ABCDEF';
  //   let color = '#';
  //   for (let i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  // }
  // constructor() { 
  //    setTimeout(() => {
  //   this.title = "changed the title";
  // }, 3000);
  // }
}
