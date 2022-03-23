import { getHealthStatus } from '../healthBar';

test.each([
  ['healthy', { name: 'Маг', health: 100 }, 'healthy'],
  ['healthy', { name: 'Маг', health: 80 }, 'healthy'],
  ['healthy', { name: 'Маг', health: 51 }, 'healthy'],
  ['wounded', { name: 'Маг', health: 50 }, 'wounded'],
  ['wounded', { name: 'Маг', health: 35 }, 'wounded'],
  ['wounded', { name: 'Маг', health: 15 }, 'wounded'],
  ['critical', { name: 'Маг', health: 14 }, 'critical'],
  ['critical', { name: 'Маг', health: 10 }, 'critical'],
  ['critical', { name: 'Маг', health: 1 }, 'critical'],
])('should return %s ', (_, health, expected) => {
  const result = getHealthStatus(health);
  expect(result).toEqual(expected);
});
