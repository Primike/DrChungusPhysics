class QuizQuestionsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index
    questions = QuizQuestion.all
    render json: questions
  end

  def show
    question = find_question
    render json: question
  end

  private

  def find_question
    QuizQuestion.find(params[:id])
  end

  def render_not_found_response
    render json: { error: "Course not found" }, status: :not_found
  end
end
