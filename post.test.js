// post.test.js
const { getPosts } = require('./post');

test('return a list of posts by a user', () => {
  const userId = 1;
  return getPosts(userId).then((data) => {
    expect(data.length).toBeGreaterThan(0);
    data.forEach((post) => {
      expect(post).toEqual(
        expect.objectContaining({
          userId,
        })
      );
    });
  });
});