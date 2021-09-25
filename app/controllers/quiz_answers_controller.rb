class QuizAnswersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index
    answers = QuizAnswer.all
    render json: answers
  end

  private

  def find_answer
    QuizAnswer.find(params[:id])
  end

  def render_not_found_response
    render json: { error: "Course not found" }, status: :not_found
  end
end
