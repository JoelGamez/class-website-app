Rails.application.routes.draw do
  devise_scope :admin do
    authenticated :admin do
      root                to: "posts#index",
                          as: :authenticated_user_root
    end
  end

  devise_for :admins,      path: "admins",
  controllers: {
    sessions:           "admins/sessions",
    registrations:      "admins/registrations",
    passwords:          "admins/passwords"
  }

  resources :posts do
    resources :images, only: [:destroy]
  end
  root 'posts#index'
  match '/about', to: 'posts#index', via: :all
  match '/tutorials', to: 'posts#index', via: :all
  match '/home', to: 'posts#index', via: :all
  match '/posts', to: 'posts#index', via: :all
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
