import { Injectable } from '@angular/core';

export enum Statuses {
  Pending = 'pending',
  Complete = 'complete',
}
export enum CheckType {
  Police = 'police',
  RightToWork = 'Right to Work',
  Employment = 'employment',
  Academic = 'academic',
  Other = 'other',
}
export interface ICaseDetail {
  caseId: string;
  caseOfficer: string;
  applicantName: string;
  status: Statuses;
  notes: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
  checks: ICheck[];
}
export interface ICheckData {
  firstName: string;
  lastName: string;
  contactEmail: string;
  contactName: string;
  notes: string;

  institute: string;
  degree: string;
  major: string;
  year: string;

  other: {
    title: string;
    files: string[];
  };

  employer: string;
  tenure: string;
  title: string;
}
export interface ICheck {
  checkId: CheckType;
  status: Statuses;
  details: Partial<ICheckData>;
  note?: string;
}
export interface INotification {
  caseId: string;
  type?: string;
  checkId: string;
  notificationId: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  datastore: {
    cases: ICaseDetail[];
    notifications: INotification[];
  } = {
    cases: [],
    notifications: [],
  };

  idIncrement = 0;

  getCase(caseId: string) {
    return this.datastore.cases.find(
      (caseDetail) => caseDetail.caseId === caseId
    );
  }

  getCurrentCaseId() {
    return `CASE-100${this.idIncrement}`;
  }
  getNextCaseId() {
    return `CASE-100${this.idIncrement++}`;
  }
  getCheck(caseId: string, checkId: string) {
    return this.datastore.cases
      .find((caseDetail) => caseDetail.caseId === caseId)
      .checks.find((check) => check.checkId.toLocaleLowerCase() === checkId.toLocaleLowerCase());
  }
  getNotification(notificationId: string) {
    return this.datastore.notifications.find(
      (notification) => notification.notificationId === notificationId
    );
  }
  putCheck(caseId: string, updatedCheck: ICheck) {
    const checkExists = this.getCase(caseId).checks.some(
      (check) => check.checkId === updatedCheck.checkId
    );
    if (checkExists) {
      const caseDetail = this.getCase(caseId);
      caseDetail.checks = caseDetail.checks.map((check) =>
        check.checkId === updatedCheck.checkId ? updatedCheck : check
      );

      const relatedCase = this.getCase(caseId);
      if (
        relatedCase.checks.filter((check) => check.status !== Statuses.Complete)
          .length
      ) {
        this.putCase({
          ...relatedCase,
          status: Statuses.Complete,
        });
      }
      return;
    } else {
      this.getCase(caseId).checks.push(updatedCheck);
    }
  }
  deleteCheck(caseId: string, checkId: string) {
    const caseDetail = this.getCase(caseId);
    caseDetail.checks = caseDetail.checks.filter(
      (check) => check.checkId !== checkId
    );
  }

  putCase(updatedCase: ICaseDetail, sendNotif: boolean = true) {
    const caseExists = this.datastore.cases.some(
      (caseDetail) => caseDetail.caseId === updatedCase.caseId
    );
    if (caseExists) {
      this.datastore.cases = this.datastore.cases.map((caseDetail) =>
        caseDetail.caseId === updatedCase.caseId ? updatedCase : caseDetail
      );
      return;
    }
    this.datastore.cases.push(updatedCase);
    if (sendNotif) {
      this.sendNotifications(updatedCase.caseId, updatedCase.checks);
    }
    console.log(this.datastore.cases);
  }
  putNotification(updatedNotification: INotification) {
    const notificationExists = this.datastore.notifications.some(
      (notification) =>
        notification.notificationId === updatedNotification.notificationId
    );
    if (notificationExists) {
      this.datastore.notifications = this.datastore.notifications.map(
        (notification) =>
          notification.notificationId === updatedNotification.notificationId
            ? updatedNotification
            : notification
      );
      return;
    }
    this.datastore.notifications.push(updatedNotification);
  }
  deleteCase(caseId: string) {
    this.datastore.cases = this.datastore.cases.filter(
      (caseDetail) => caseDetail.caseId !== caseId
    );
  }
  deleteNotification(notificationId: string) {
    this.datastore.notifications = this.datastore.notifications.filter(
      (notification) => notification.notificationId !== notificationId
    );
  }
  sendNotifications(caseId: string, checks: ICheck[]) {
    const baseNotification = {
      caseId: caseId,
      message: '',
      notificationId: `${this.idIncrement++}`,
    };
    const caseDetail = this.getCase(caseId);
    if (checks.find((check) => check.checkId === CheckType.RightToWork)) {
      this.putNotification({
        ...baseNotification,
        message: caseDetail.applicantName + ' has responded.',
        checkId: CheckType.RightToWork,
        notificationId: `${this.idIncrement++}`,
      });
    }
    if (checks.find((check) => check.checkId === 'academic')) {
      this.putNotification({
        ...baseNotification,
        type: 'email',
        message: 'You have received an email.',
        checkId: 'academic',
        notificationId: `${this.idIncrement++}`,
      });
    }
  }
}
