class UserCoursesController < ApplicationController

    def index
        usercourses = UserCourse.all
        render json: usercourses, include: ['course']
    end

    def create
        usercourse = UserCourse.create(params.permit(:user_id, :course_id))
        render json: usercourse, status: :created
    end
end
