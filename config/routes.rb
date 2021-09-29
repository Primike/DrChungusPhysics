Rails.application.routes.draw do
  
  resources :testimonials
  resources :quiz_answers
  resources :quiz_questions
  resources :chapters
  resources :user_courses
  resources :courses
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
