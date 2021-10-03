class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: true
    has_many :user_courses
    has_many :courses, through: :user_courses
end
