Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      devise_for :users, {
        class_name: 'User',
        module: :devise,
        controllers: {
          sessions: 'api/v1/sessions',
          registrations: 'api/v1/registrations'
        }
      }
    end
  end
end
