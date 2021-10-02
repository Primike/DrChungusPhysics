class UserCoursesController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response    

    def index
        usercourses = UserCourse.all
        render json: usercourses
    end

    def create
        usercourse = UserCourse.create(params.permit(:user_id, :course_id))
        render json: usercourse, status: :created
    end

    def destroy
        usercourse = find_usercourse
        usercourse.destroy
        head :no_content
    end

    private

    def find_usercourse
        UserCourse.find(params[:id])
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: { error: "UserCourse not found" }, status: :not_found
    end
end
