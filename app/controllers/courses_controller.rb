class CoursesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  # GET /birds
  def index
    courses = Course.all
    render json: courses
  end

  # GET /birds/:id
  def show
    course = find_course
    render json: course
  end

  # PATCH /birds/:id
  def update
    course = find_course
    course.update(course_params)
    render json: course
  end

  private

  def find_course
    Course.find(params[:id])
  end

  def course_params
    params.permit(:completed)
  end

  def render_not_found_response
    render json: { error: "Course not found" }, status: :not_found
  end
end
