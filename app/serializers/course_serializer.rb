class CourseSerializer < ActiveModel::Serializer
  attributes :id, :subject, :subject_image

  has_many :chapters
  has_many :quiz_questions
  # has_many :quiz_answers
end
