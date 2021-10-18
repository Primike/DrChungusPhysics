class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: true
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :email, presence: true
    has_many :user_courses
    has_many :courses, through: :user_courses
end
