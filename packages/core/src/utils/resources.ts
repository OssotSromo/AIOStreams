import fs from 'fs';
import path from 'path';

export class ResourceManager {
  static getResource(resourceName: string) {
    const filePath = path.join(
      __dirname,
      '../../../../',
      'resources',
      resourceName
    );

    if (!fs.existsSync(filePath)) {
      console.warn(`Resource ${resourceName} not found at ${filePath} — returning empty object`);
      return {}; // or return null if caller handles that better
    }

    try {
      return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (err) {
      console.error(`Failed to parse ${resourceName}:`, err);
      return {}; // or throw if you want hard failure on bad JSON
    }
  }
}
