require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Myapp
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    config.api_only = true

    # Add the CORS configuration here
    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins 'localhost:4000'  # adjust this to match your actual frontend URL
        resource '*',
          headers: :any,
          methods: [:get, :post, :put, :patch, :delete, :options, :head]
      end
    end
  end
end
