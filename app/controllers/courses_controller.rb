class CoursesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index
    courses = Course.all
    render json: courses
  end

  def show
    course = find_course
    render json: course
  end

  private

  def find_course
    Course.find(params[:id])
  end

  def render_not_found_response
    render json: { error: "Course not found" }, status: :not_found
  end
end
