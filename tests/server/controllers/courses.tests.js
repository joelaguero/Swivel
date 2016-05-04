import * as courses from '../../../server/controllers/courses.js';

describe('Course Controller', () => {
  // it('should create new courses', (done) => {
  //   done();
  // });

  describe('Retrieving courses', () => {
    it('should retrieve courses for a student', (done) => {
      const req = { body: { courseId: 1 } };

      new Promise((resolve) => (
        resolve(courses.findAllByStudent(req, {}))
      ))
      .then((res) => {
        const result = JSON.parse(res).body.assignments;
        expect(result.length).toBeGreaterThan(0);
        expect(result[0].name).toBeDefined();
        expect(result[0].description).toBeDefined();
        expect(result[0].department).toBeDefined();
        done();
      })
      .catch((err) => {
        throw new Error(err);
      });
    });

    it('should retrieve courses for a teacher', (done) => {
      const req = { body: { courseId: 1 } };

      new Promise((resolve) => (
        resolve(courses.findAllByTeacher(req, {}))
      ))
      .then((res) => {
        const result = JSON.parse(res).body.courses;
        expect(result.length).toBeGreaterThan(0);
        expect(result[0].name).toBeDefined();
        expect(result[0].description).toBeDefined();
        expect(result[0].department).toBeDefined();
        done();
      })
      .catch((err) => {
        throw new Error(err);
      });
    });
  });

  // it('should update existing courses', (done) => {
  //   done();
  // });
  //
  // it('should remove courses from the database', (done) => {
  //   done();
  // });
});
