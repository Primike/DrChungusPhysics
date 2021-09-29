class TestimonialsController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        testimonials = Testimonial.all
        render json: testimonials
    end

    def create
        testimonial = Testimonial.create(params.permit(:image, :paragraph, :author))
        render json: testimonial, status: :created
    end


    private

    def render_not_found_response
        render json: { error: "Course not found" }, status: :not_found
    end
end
