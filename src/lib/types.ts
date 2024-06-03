export interface Patient {
  name: string;
  gender: Gender;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history?: DiagnosisHistory[];
  diagnostic_list?: DiagnosticList[];
  lab_results?: string[];
}

export interface DiagnosisHistory {
  month: Month;
  year: number;
  blood_pressure: BloodPressure;
  heart_rate: HeartRate;
  respiratory_rate: HeartRate;
  temperature: HeartRate;
}

export interface BloodPressure {
  systolic: HeartRate;
  diastolic: HeartRate;
}

export interface HeartRate {
  value: number;
  levels: Levels;
}

export enum Levels {
  HigherThanAverage = "Higher than Average",
  LowerThanAverage = "Lower than Average",
  Normal = "Normal",
}

export enum Month {
  April = "April",
  August = "August",
  December = "December",
  February = "February",
  January = "January",
  July = "July",
  June = "June",
  March = "March",
  May = "May",
  November = "November",
  October = "October",
  September = "September",
}

export interface DiagnosticList {
  name: string;
  description: string;
  status: Status;
}

export enum Status {
  ActivelyBeingTreated = "Actively being treated",
  Cured = "Cured",
  Inactive = "Inactive",
  StatusUnderObservation = "Under Observation",
  UnderObservation = "Under observation",
  Untreated = "Untreated",
}

export enum Gender {
  Female = "Female",
  Male = "Male",
}
