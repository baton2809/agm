import { TimePrettyPipe } from './time-pretty.pipe';

describe('TimePrettyPipe', () => {
  it('create an instance', () => {
    const pipe = new TimePrettyPipe();
    expect(pipe).toBeTruthy();
  });
});
