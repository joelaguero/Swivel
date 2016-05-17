import Chat from '../models/Chat.js';
// sender: { id: 1, type: 'teacher'}
// recipient {id: 2, type: 'student'}
// message { body: , timestamp: , author:}

export const saveChats = (chats, teacher, student) => {
  for (let i = 0; i < chats.length; i++) {
    return new Promise((resolve, reject) => {
      Chat.create({
        authorId: chats[i].author,
        timestamp: chats[i].timestamp,
        teacherId: teacher.id,
        studentId: student.id,
        body: chats[i].body,
      })
      .catch((err) => {
        reject(err);
      });
    });
  }
};
