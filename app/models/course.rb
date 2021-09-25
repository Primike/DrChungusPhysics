class Course < ApplicationRecord
    has_many :chapters
    has_many :user_courses
    has_many :users, through: :user_courses
    has_many :quiz_questions
    has_many :quiz_answers, through: :quiz_questions
end
