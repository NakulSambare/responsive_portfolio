import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  getDocs,
  query,
  where,
} from '@angular/fire/firestore';
import { Skills } from './model/skills';

@Injectable({
  providedIn: 'root',
})
export class SkillServiceService {
  constructor(private fs: Firestore) {}

  // async getLanguage() {
  //   const languagesCollection = collection(this.fs, 'languages');

  //   // You can add additional query conditions if needed
  //   const q = query(languagesCollection);

  //   try {
  //     const querySnapshot = await getDocs(q);

  //     // Process the documents in the querySnapshot
  //     querySnapshot.forEach((doc) => {
  //       console.log(doc.id, ' => ', doc.data());
  //     });

  //     // Return the documents or relevant data
  //     return querySnapshot.docs.map((doc) => doc.data());
  //   } catch (error) {
  //     console.error('Error getting documents: ', error);
  //     throw error;
  //   }
  // }
  getLanguage(): Promise<Skills[]> {
    const messageCollection = collection(this.fs, 'languages');
    return getDocs(messageCollection).then((querySnapshot) => {
      const result: Skills[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data() as Skills;
        result.push(data);
      });
      return result;
    });
  }

  getFrameworks(): Promise<Skills[]> {
    const messageCollection = collection(this.fs, 'frameworks');
    return getDocs(messageCollection).then((querySnapshot) => {
      const result: Skills[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data() as Skills;
        result.push(data);
      });
      return result;
    });
  }
  getDatabases(): Promise<Skills[]> {
    const messageCollection = collection(this.fs, 'databases');
    return getDocs(messageCollection).then((querySnapshot) => {
      const result: Skills[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data() as Skills;
        result.push(data);
      });
      return result;
    });
  }

  getTools(): Promise<Skills[]> {
    const messageCollection = collection(this.fs, 'tools');
    return getDocs(messageCollection).then((querySnapshot) => {
      const result: Skills[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data() as Skills;
        result.push(data);
      });
      return result;
    });
  }
}
