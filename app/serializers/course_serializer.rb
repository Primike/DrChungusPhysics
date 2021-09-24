class CourseSerializer < ActiveModel::Serializer
  attributes :id, :subject, :subject_image

  has_many :chapters
end
