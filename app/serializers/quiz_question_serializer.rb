class QuizQuestionSerializer < ActiveModel::Serializer
  attributes :id, :question
  
  belongs_to :course
  has_many :quiz_answers
end
