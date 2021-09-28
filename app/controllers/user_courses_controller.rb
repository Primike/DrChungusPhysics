class UserCoursesController < ApplicationController
    def create
        usercourse = UserCourse.create(params.permit(:user_id, :course_id))
        render json: usercourse, status: :created
    end
end
