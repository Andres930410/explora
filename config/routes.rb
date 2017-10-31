Rails.application.routes.draw do
  root to: "static#index"
  get '/explora', to: "static#information"
  get "/explora/information", to: "static#information"
  get '/explora/information/:id', to: 'static#show', as: 'show'
  get '/explora/map', to: "static#map"
  get '/explora/buildings', to: "static#buildings"
  get '/explora/entertaiment', to: "static#entertaiment"
  get '/explora/entertaiment/physical', to:"static#physical"
  get '/explora/entertaiment/cultural', to:"static#cultural"
  get '/explora/research', to: "static#research"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
