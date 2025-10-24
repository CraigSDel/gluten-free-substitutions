import { generateId } from '../idGenerator';

describe('generateId', () => {
  it('should generate unique IDs', () => {
    const id1 = generateId('test');
    const id2 = generateId('test');
    
    expect(id1).toMatch(/^test-\d+-\d+$/);
    expect(id2).toMatch(/^test-\d+-\d+$/);
    expect(id1).not.toBe(id2);
  });

  it('should use default prefix when none provided', () => {
    const id = generateId();
    
    expect(id).toMatch(/^id-\d+-\d+$/);
  });

  it('should generate different IDs with different prefixes', () => {
    const id1 = generateId('prefix1');
    const id2 = generateId('prefix2');
    
    expect(id1).toMatch(/^prefix1-\d+-\d+$/);
    expect(id2).toMatch(/^prefix2-\d+-\d+$/);
    expect(id1).not.toBe(id2);
  });
});
