import { z } from 'zod';

export const AuthProviderSchema = z.enum(['google', 'email', 'anonymous']);
export type AuthProvider = z.infer<typeof AuthProviderSchema>;

export const AuthModeSchema = z.enum(['login', 'signup']);
export type AuthMode = z.infer<typeof AuthModeSchema>;

export const UserProfileSchema = z.object({
  uid: z.string(),
  email: z.string().email().nullable().optional(),
  displayName: z.string(),
  avatarUrl: z.string().url().nullable().optional(),
  avatarEmoji: z.string().default('🥋'),
  authProvider: AuthProviderSchema.default('anonymous'),
  isEmailVerified: z.boolean().default(false),
  createdAt: z.string(),
  lastLoginAt: z.string(),
});

export type UserProfile = z.infer<typeof UserProfileSchema>;
