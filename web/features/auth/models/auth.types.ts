export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string;
  avatarEmoji: string;
  beltRank: string;
  level: number;
  totalXp: number;
  weeklyXp: number;
  weekId: string;
  currentStreak: number;
  lastActiveDate: string | null;
  friendCode: string;
}
