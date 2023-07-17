class Api::V1::SessionsController < ApplicationController
  module Api
    module V1
      class SessionsController < Devise::SessionsController
        respond_to :json

        private

        def respond_with(resource, _opts = {})
          render json: { status: { code: 200, message: 'Logged in successfully.' }, data: UserSerializer.new(resource).serializable_hash[:data][:attributes] }
        end

        def respond_to_on_destroy
          log_out_success && return if signed_out?

          log_out_failure
        end

        def log_out_success
          render json: { status: { code: 200, message: 'Logged out successfully.' }, data: {} }
        end

        def log_out_failure
          render json: { status: { code: 400, message: 'Logout failed.' }, data: {} }
        end
      end
    end
  end

end
