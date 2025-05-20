import * as migration_20250520_050905 from './20250520_050905';

export const migrations = [
  {
    up: migration_20250520_050905.up,
    down: migration_20250520_050905.down,
    name: '20250520_050905'
  },
];
