export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export interface printTeacher {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacher = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

export interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

export class Student implements StudentClassInterface {
  private firstName: string;
  private lastName: string;
  
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework(): string {
    return 'Currently working';
}
  displayName(): string {
    return this.firstName;
  }
}