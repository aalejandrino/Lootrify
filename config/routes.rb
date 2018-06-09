Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:new, :create, :destroy]
    resources :users, only: [:create]

    # resources :searches, only: [:create] do
    #   resources :friendships, only: [:show, :index]
    # end

    resources :friend, only: [:show, :index, :create]

    # namespace :users do
    #   resources :search, only: [:index]
    # end

    get '/users/search', to: 'users#search'

  end

end
