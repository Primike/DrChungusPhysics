class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    before_action :authorize, only: [:show]
  
    def create
      user = User.create(user_params)
      if user.valid?
        session[:user_id] = user.id
        render json: user, status: :created
      else
        render json: { error: user.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    def show
      user = User.find_by(id: session[:user_id])
      render json: user, include: ['courses']
    end

    def update 
      user = User.find(params[:id])
      user.update(user_params)
      render json: user
    end
  
    private
  
    def authorize
      return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
  
    def user_params
      params.permit(:username, :password, :password_confirmation,:first_name, :last_name, :email, :image_url)
    end

    def not_found
      render json: {error: "Not found"}, status: :not_found
    end
end