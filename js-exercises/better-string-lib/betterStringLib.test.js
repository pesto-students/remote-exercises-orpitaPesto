import { reverse, equal } from './betterStringLib';

describe('testing the Reverse function', () => {
  test('Smileys', () => {
    expect(reverse('孫 悟空😅😅')).toBe("😅😅空悟 孫");
  });
  test('reverse pure string', () => {
    expect(reverse('ab')).toBe('ba');
  });
  test('reverse symbol', () => {
    expect(reverse('foo 𝌆 bar')).toBe('rab 𝌆 oof');
  });
  test('reverse unicodes', () => {
    expect(reverse('mañana mañana')).toBe('anañam anañam');
  });
});

describe('testing the Reverse function', () => {
  test('equal pure string', () => {
    expect(equal("a", "a")).toBe(true);
  });
  test('equal symbol', () => {
    expect(equal('foo 𝌆 bar', 'foo 𝌆 bar')).toBe(true);
  });
  test('equal unicodes', () => {
    expect(equal('mañana mañana', 'mañana mañana')).toBe(true);
  });
});