import {hello} from '@/test-utils'

describe('Alias Test', () => {
  it('should resolve alias', () => {
    expect(hello).toBe('world')
  })
})
