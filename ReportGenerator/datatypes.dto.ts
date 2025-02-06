export interface userStatus {
  id: string;
  isActive: boolean;
}

export interface userProfile {
  userId: string;
  name: string;
  age: number;
  city: string;
}

export interface cityReport {
  city: string;
  activeCount: number;
  inActiveCount: number;
}
