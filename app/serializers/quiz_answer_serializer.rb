class QuizAnswerSerializer < ActiveModel::Serializer
  attributes :id, :answer, :correct
  # has_one :quiz_question
end
