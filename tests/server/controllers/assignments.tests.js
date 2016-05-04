import * as assignments from '../../../server/controllers/assignments.js';

describe('Assignment Controller', () => {
  // it('should create new assignments', (done) => {
  //   done();
  // });

  it('should successfully retrieve existing assignments', (done) => {
    const req = { body: { courseId: 1 } };
    new Promise((resolve) => (
      resolve(assignments.findAllByCourse(req, {}))
    ))
    .then((res) => {
      const result = JSON.parse(res).body.assignments;
      expect(result.length).toBeGreaterThan(0);
      expect(result[0].name.length).toBeGreaterThan(0);
      expect(result[0].description.length).toBeGreaterThan(0);
      expect(result[0].weight).toBeDefined();
      expect(result[0].dueDate).toBeDefined();
      done();
    })
    .catch((err) => {
      throw new Error(err);
    });
  });

  // it('should update existing assignments', (done) => {
  //   done();
  // });
  //
  // it('should remove assignments from the database', (done) => {
  //   done();
  // });
});
