export type AchievementRarity =
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary';

export type AchievementCategory =
  | 'streak'
  | 'milestones'
  | 'mastery'
  | 'dojos'
  | 'challenges';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: AchievementCategory;
  rarity: AchievementRarity;
  points: number;
}

export const ACHIEVEMENTS: Achievement[] = [
  // 1. Streaks
  {
    id: 'streak_5',
    title: 'Streak Starter',
    description: 'Achieve a 5-answer streak in any mode',
    icon: '🔥',
    category: 'streak',
    rarity: 'common',
    points: 25,
  },
  {
    id: 'streak_10',
    title: 'Hot Streak',
    description: 'Achieve a 10-answer streak in any mode',
    icon: '⚡',
    category: 'streak',
    rarity: 'common',
    points: 50,
  },
  {
    id: 'streak_25',
    title: 'Streak Legend',
    description: 'Reach an uninterrupted 25-answer streak',
    icon: '🌟',
    category: 'streak',
    rarity: 'uncommon',
    points: 100,
  },
  {
    id: 'streak_50',
    title: 'Unstoppable',
    description: 'Reach a blistering 50-answer streak',
    icon: '💥',
    category: 'streak',
    rarity: 'rare',
    points: 200,
  },
  {
    id: 'streak_100',
    title: 'Century Streak',
    description: 'Achieve a legendary 100-answer streak',
    icon: '👑',
    category: 'streak',
    rarity: 'epic',
    points: 500,
  },

  // 2. Milestones (Correct Answers)
  {
    id: 'first_steps',
    title: 'First Steps',
    description: 'Answer your first question correctly',
    icon: '🌱',
    category: 'milestones',
    rarity: 'common',
    points: 10,
  },
  {
    id: 'correct_50',
    title: 'Getting Serious',
    description: 'Answer 50 total questions correctly',
    icon: '📖',
    category: 'milestones',
    rarity: 'common',
    points: 50,
  },
  {
    id: 'correct_100',
    title: 'Century Scholar',
    description: 'Answer 100 total questions correctly',
    icon: '📜',
    category: 'milestones',
    rarity: 'uncommon',
    points: 100,
  },
  {
    id: 'correct_500',
    title: 'Knowledge Seeker',
    description: 'Answer 500 total questions correctly',
    icon: '📚',
    category: 'milestones',
    rarity: 'rare',
    points: 300,
  },
  {
    id: 'correct_1000',
    title: 'Master Scholar',
    description: 'Reach 1,000 total correct answers',
    icon: '🎓',
    category: 'milestones',
    rarity: 'epic',
    points: 750,
  },

  // 3. Mastery (Characters with 90%+ acc and >=10 attempts)
  {
    id: 'mastery_1',
    title: 'First Mastery',
    description: 'Achieve Mastered status on your first character',
    icon: '⭐',
    category: 'mastery',
    rarity: 'common',
    points: 50,
  },
  {
    id: 'mastery_10',
    title: 'Mastery Apprentice',
    description: 'Master 10 distinct Japanese characters',
    icon: '🥈',
    category: 'mastery',
    rarity: 'uncommon',
    points: 150,
  },
  {
    id: 'mastery_25',
    title: 'Mastery Adept',
    description: 'Master 25 distinct Japanese characters',
    icon: '🥇',
    category: 'mastery',
    rarity: 'rare',
    points: 300,
  },
  {
    id: 'mastery_50',
    title: 'Mastery Master',
    description: 'Master 50 distinct Japanese characters',
    icon: '💎',
    category: 'mastery',
    rarity: 'epic',
    points: 750,
  },

  // 4. Dojos Exploration
  {
    id: 'kana_25',
    title: 'Kana Initiate',
    description: 'Complete 25 drills in Kana Dojo',
    icon: 'あ',
    category: 'dojos',
    rarity: 'common',
    points: 50,
  },
  {
    id: 'kanji_25',
    title: 'Kanji Explorer',
    description: 'Complete 25 drills in Kanji Dojo',
    icon: '漢',
    category: 'dojos',
    rarity: 'common',
    points: 50,
  },
  {
    id: 'vocab_25',
    title: 'Vocab Builder',
    description: 'Complete 25 drills in Vocab Dojo',
    icon: '語',
    category: 'dojos',
    rarity: 'common',
    points: 50,
  },
  {
    id: 'dojo_triad',
    title: 'Dojo Triad',
    description: 'Practice at least once in all 3 Dojos',
    icon: '🏯',
    category: 'dojos',
    rarity: 'uncommon',
    points: 100,
  },

  // 5. Challenges (Blitz & Gauntlet)
  {
    id: 'blitz_30s',
    title: 'Quick Reflexes',
    description: 'Complete a 30s Blitz Challenge session',
    icon: '⚡',
    category: 'challenges',
    rarity: 'common',
    points: 25,
  },
  {
    id: 'blitz_60s',
    title: 'Blitz Runner',
    description: 'Complete a 60s Blitz Challenge session',
    icon: '⏱️',
    category: 'challenges',
    rarity: 'common',
    points: 50,
  },
  {
    id: 'blitz_score_20',
    title: 'Blitz Champion',
    description: 'Score 20+ correct answers in a single Blitz run',
    icon: '🏆',
    category: 'challenges',
    rarity: 'rare',
    points: 250,
  },
  {
    id: 'gauntlet_normal',
    title: 'Gauntlet Survivor',
    description: 'Clear a Gauntlet challenge on Normal mode',
    icon: '🛡️',
    category: 'challenges',
    rarity: 'uncommon',
    points: 100,
  },
  {
    id: 'gauntlet_hard',
    title: 'Iron Will',
    description: 'Clear a Gauntlet challenge on Hard mode without regen',
    icon: '⚔️',
    category: 'challenges',
    rarity: 'rare',
    points: 300,
  },
  {
    id: 'gauntlet_yolo',
    title: 'Death Defier',
    description: 'Clear a Gauntlet challenge on YOLO Instant Death mode',
    icon: '💀',
    category: 'challenges',
    rarity: 'legendary',
    points: 1000,
  },
  {
    id: 'points_500',
    title: 'Point Collector',
    description: 'Accumulate 500 total achievement points',
    icon: '💰',
    category: 'milestones',
    rarity: 'uncommon',
    points: 100,
  },
];

export const RARITY_COLORS: Record<
  AchievementRarity,
  { bg: string; border: string; text: string }
> = {
  common: { bg: '#F3F4F6', border: '#D1D5DB', text: '#4B5563' },
  uncommon: { bg: '#DEF7EC', border: '#31C48D', text: '#03543F' },
  rare: { bg: '#EDEBFE', border: '#9061F9', text: '#5521B5' },
  epic: { bg: '#FEF08A', border: '#EAB308', text: '#713F12' },
  legendary: { bg: '#FEE2E2', border: '#EF4444', text: '#991B1B' },
};

export function calculatePlayerLevel(totalPoints: number) {
  const level = Math.floor(Math.sqrt(totalPoints / 100)) + 1;
  const currentLevelMinPoints = Math.pow(level - 1, 2) * 100;
  const nextLevelPoints = Math.pow(level, 2) * 100;
  const progressRatio =
    nextLevelPoints > currentLevelMinPoints
      ? (totalPoints - currentLevelMinPoints) /
        (nextLevelPoints - currentLevelMinPoints)
      : 1;

  const titles: Record<number, string> = {
    1: 'Novice • 見習い',
    2: 'Apprentice • 弟子',
    3: 'Practitioner • 修業者',
    4: 'Adept • 達人見習い',
    5: 'Expert • 熟練者',
    6: 'Master • 達人',
  };
  const title = titles[level] || 'Grandmaster • 師範';

  return {
    level,
    title,
    currentLevelMinPoints,
    nextLevelPoints,
    progressPercent: Math.min(100, Math.max(0, Math.round(progressRatio * 100))),
  };
}
