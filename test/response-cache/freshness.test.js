import fetchMock from 'fetch-mock';
import { bestfetch, responseCache } from '../../src';

describe('responseCache: freshness', () => {
  test('It errors if you pass an invalid function to defineStaleness', () => {
    expect(() => {
      responseCache.defineStaleness({});
    }).toThrow();
  });

  describe('responseCache.isFresh', () => {
    test('returns false when a value is not in the cache', () => {
      expect(responseCache.has('my-request', { includeStale: true })).toBe(
        false
      );
      expect(responseCache.isFresh('my-request')).toBe(false);
    });

    test('returns true when a request is in the cache, and it is fresh', done => {
      bestfetch('/test/succeeds/json', { requestKey: 'my-request' }).then(
        res => {
          expect(res).toEqual(
            expect.objectContaining({
              data: {
                a: true,
              },
              status: 200,
              statusText: 'OK',
              ok: true,
            })
          );

          expect(responseCache.has('my-request', { includeStale: true })).toBe(
            true
          );
          expect(responseCache.isFresh('my-request')).toBe(true);
          done();
        }
      );
    });

    test('returns false when a value is in the cache, but is not fresh', done => {
      responseCache.defineStaleness(() => true);

      bestfetch('/test/succeeds/json', { requestKey: 'my-request' }).then(
        res => {
          expect(res).toEqual(
            expect.objectContaining({
              data: {
                a: true,
              },
              status: 200,
              statusText: 'OK',
              ok: true,
            })
          );

          expect(responseCache.has('my-request', { includeStale: true })).toBe(
            true
          );
          expect(responseCache.isFresh('my-request')).toBe(false);
          expect(responseCache.has('my-request', { includeStale: true })).toBe(
            true
          );
          done();
        }
      );
    });
  });

  test('Overriding the default freshness definition to ignore the entire cache should work', done => {
    responseCache.defineStaleness(() => true);

    bestfetch('/test/succeeds/json', { requestKey: 'my-request' }).then(res => {
      expect(res).toEqual(
        expect.objectContaining({
          data: {
            a: true,
          },
          status: 200,
          statusText: 'OK',
          ok: true,
        })
      );

      expect(responseCache.isFresh('my-request')).toBe(false);

      bestfetch('/test/succeeds/json', { requestKey: 'my-request' }).then(
        resTwo => {
          expect(resTwo).toEqual(
            expect.objectContaining({
              data: {
                a: true,
              },
              status: 200,
              statusText: 'OK',
              ok: true,
            })
          );
          expect(responseCache.isFresh('my-request')).toBe(false);
          expect(fetchMock.calls('/test/succeeds/json').length).toBe(2);
          done();
        }
      );
    });
  });

  test('Overriding it to ignore cached responses after 1 read should work', done => {
    responseCache.defineStaleness(cacheObject => {
      return cacheObject.accessCount >= 1;
    });

    bestfetch('/test/succeeds/json', { requestKey: 'my-request' }).then(res => {
      expect(res).toEqual(
        expect.objectContaining({
          data: {
            a: true,
          },
          status: 200,
          statusText: 'OK',
          ok: true,
        })
      );

      expect(responseCache.isFresh('my-request')).toBe(true);

      bestfetch('/test/succeeds/json', { requestKey: 'my-request' }).then(
        resTwo => {
          expect(resTwo).toEqual(
            expect.objectContaining({
              data: {
                a: true,
              },
              status: 200,
              statusText: 'OK',
              ok: true,
            })
          );
          expect(fetchMock.calls('/test/succeeds/json').length).toBe(1);
          expect(responseCache.isFresh('my-request')).toBe(false);

          bestfetch('/test/succeeds/json', { requestKey: 'my-request' }).then(
            resThree => {
              expect(resThree).toEqual(
                expect.objectContaining({
                  data: {
                    a: true,
                  },
                  status: 200,
                  statusText: 'OK',
                  ok: true,
                })
              );
              expect(fetchMock.calls('/test/succeeds/json').length).toBe(2);
              expect(responseCache.isFresh('my-request')).toBe(true);
              done();
            }
          );
        }
      );
    });
  });
});