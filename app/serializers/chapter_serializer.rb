class ChapterSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :image
  has_one :course
end
