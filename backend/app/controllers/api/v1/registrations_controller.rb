module Api
  module V1
    class RegistrationsController < Devise::RegistrationsController
      skip_before_action :authenticate_user!
      before_action :configure_permitted_parameters

      respond_to :json

      def create
        build_resource(sign_up_params)

        resource.save
        yield resource if block_given?
        if resource.persisted?
          if resource.active_for_authentication?
            set_flash_message! :notice, :signed_up
            respond_with resource, location: after_sign_up_path_for(resource)
          else
            set_flash_message! :notice, :"signed_up_but_#{resource.inactive_message}"
            expire_data_after_sign_in!
            respond_with resource, location: after_inactive_sign_up_path_for(resource)
          end
        else
          clean_up_passwords resource
          set_minimum_password_length
          Rails.logger.info resource.errors.full_messages # <- ログ出力
          respond_with resource
        end
      end


      private

      def sign_up_params
        params.require(:user).permit(:email, :password)
      end

      def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [:email, :password])
      end
    end
  end
end
