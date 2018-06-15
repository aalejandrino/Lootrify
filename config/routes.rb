Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:new, :create, :destroy]
    resources :users, only: [:create, :show]
    resources :friends, only: [:show, :index, :create, :destroy]

    resources :bills, only: [:show, :index, :create, :edit, :destroy] do
      resources :comments, only: [:show, :create, :destroy, :index]
    end
    resources :billmemberships, only: [:create, :destroy]

    get '/search/users', to: 'search#users'

  end

end
