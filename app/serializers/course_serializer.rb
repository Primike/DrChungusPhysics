class CourseSerializer < ActiveModel::Serializer
  attributes :id, :subject, :subject_image, :completed
end
