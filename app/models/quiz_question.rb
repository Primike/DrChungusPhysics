class QuizQuestion < ApplicationRecord
  belongs_to :course
  has_many :quiz_answers
end
