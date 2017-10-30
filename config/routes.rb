Rails.application.routes.draw do
  root to: "static#index"
  get "/information", to: "static#information"
  get '/information/:id', to: 'static#show', as: 'show'
  get '/map', to: "static#map"
  get '/buildings', to: "static#buildings"
  get '/entertaiment', to: "static#entertaiment"
  get '/entertaiment/physical', to:"static#physical"
  get '/entertaiment/cultural', to:"static#cultural"
  get '/research', to: "static#research"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
