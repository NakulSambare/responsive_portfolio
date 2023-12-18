import { Component, AfterViewInit } from '@angular/core';
import { ContactService } from './contact.service';
import { Contact } from './Contact';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Skills } from './model/skills';
import { SkillServiceService } from './skill-service.service';
import { DocumentData } from '@angular/fire/firestore';

declare var AOS: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private contactService: ContactService,
    private skillService: SkillServiceService
  ) {}
  ngAfterViewInit() {
    AOS.init(); // Initialize AOS once the component has been initialized
    this.getLanguages();
    this.getFramwork();
    this.getDatabase();
    this.getTools();
  }
  title = 'responsive_portfolio';
  isLoading: boolean = false;
  contactForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required]),
  });
  userName1: string | null | undefined;
  email1: string | null | undefined;
  message1: string | null | undefined;
  contact: Contact = new Contact();
  get username() {
    return this.contactForm.get('username');
  }
  get userEmail() {
    return this.contactForm.get('userEmail');
  }
  get message() {
    return this.contactForm.get('message');
  }
  submitMessage() {
    this.isLoading = true;
    console.log(JSON.stringify(this.contactForm.value));
    console.log(this.contactForm.get('username')?.value);
    console.log(this.contactForm.get('username'));

    this.userName1 != this.contactForm.get('username')?.value;
    console.log(this.userName1!);
    console.log(this.userName1);
    this.message1 != this.contactForm.get('message')?.value;
    this.email1 != this.contactForm.get('email')?.value;
    // this.contactService
    //   .addMessage(this.userName1!, this.email1!, this.message1!)
    //   .then((res) => {
    //     console.log(res);
    //   });
    this.contactService
      .addMessage(
        this.contactForm.get('username')?.value!,
        this.contactForm.get('userEmail')?.value!,
        this.contactForm.get('message')?.value!
      )
      .then((res) => {
        console.log(res);
        alert('Message sent successfully!!.');
        this.isLoading = false;
        this.contactForm.get('username')?.setValue('');
        this.contactForm.get('userEmail')?.setValue('');
        this.contactForm.get('message')?.setValue('');
      });
  }
  isHovered = false;

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }

  languageList: Skills[] = [];
  frameworkList: Skills[] = [];
  databaseList: Skills[] = [];
  toolsList: Skills[] = [];
  // getSkills(): void {
  //   this.skillService.getLanguage()
  //     .then((result: Skills[]) => {
  //       this.languageList = result;
  //     })
  //     .catch((error) => {
  //       console.error('Error retrieving skills: ', error);
  //     });
  // }

  getLanguages(): void {
    this.skillService
      .getLanguage()
      .then((result: DocumentData[]) => {
        this.languageList = result as Skills[];
        console.log(this.languageList);
      })
      .catch((error) => {
        console.error('Error retrieving skills: ', error);
      });
  }
  getFramwork(): void {
    this.skillService
      .getFrameworks()
      .then((result: DocumentData[]) => {
        this.frameworkList = result as Skills[];
        console.log(this.frameworkList);
      })
      .catch((error) => {
        console.error('Error retrieving skills: ', error);
      });
  }

  getDatabase(): void {
    this.skillService
      .getDatabases()
      .then((result: DocumentData[]) => {
        this.databaseList = result as Skills[];
        console.log(this.databaseList);
      })
      .catch((error) => {
        console.error('Error retrieving skills: ', error);
      });
  }

  getTools(): void {
    this.skillService
      .getTools()
      .then((result: DocumentData[]) => {
        this.toolsList = result as Skills[];
        console.log(this.toolsList);
      })
      .catch((error) => {
        console.error('Error retrieving skills: ', error);
      });
  }
}
