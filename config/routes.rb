Rails.application.routes.draw do
  resource :session
  resources :passwords, param: :token
  resources :equipment

  get "up" => "rails/health#show", as: :rails_health_check

  root "equipment#index"
end
