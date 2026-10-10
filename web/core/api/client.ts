import { config } from '../config';

/**
 * Cloud SDK & Firebase Web Client Initialization Wrapper
 */

export interface CloudClientConfig {
  apiKey?: string;
  authDomain?: string;
  projectId?: string;
}

export function getCloudClientConfig(): CloudClientConfig {
  return {
    apiKey: config.firebaseApiKey,
    authDomain: config.firebaseAuthDomain,
    projectId: config.firebaseProjectId,
  };
}
