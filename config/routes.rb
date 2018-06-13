Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:new, :create, :destroy]
    resources :users, only: [:create, :show]
    resources :friends, only: [:show, :index, :create, :destroy]
    resources :bills, only: [:show, :index, :create, :destroy]
    resources :billmemberships, only: [:create]

    get '/search/users', to: 'search#users'

  end

end
