Rails.application.routes.draw do
  root to: "static#index"
  get "/information", to: "static#information"
  get '/information/:id', to: 'static#show', as: 'show'
  get '/map', to: "static#map"
  get '/buildings', to: "static#buildings"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
