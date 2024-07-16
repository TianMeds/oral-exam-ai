import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const OralExam = pgTable('oralExam', {
  id: serial('id').primaryKey(),
  jsonOralResp: text('jsonOralResp').notNull(),
  examTitle: varchar('examTitle').notNull(),
  examDesc: varchar('examDesc').notNull(),
  examLevel: varchar('examLevel').notNull(),
  createdBy: varchar('createdBy').notNull(),
  createdAt: varchar('createdAt'),
  examId: varchar('examId').notNull()
});


export const UserAnswer=pgTable('userAnswer', {
  id:serial('id').primaryKey(),
  examIdRef:varchar('examId').notNull(),
  question:varchar('question').notNull(),
  correctAns:text('correctAns'),
  userAns:text('userAns'),
  feedback:text('feedback'),
  rating:varchar('rating'),
  userEmail:varchar('userEmail'),
  createdAt:varchar('createdAt'),
})