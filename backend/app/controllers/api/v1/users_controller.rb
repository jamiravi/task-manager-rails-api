module Api
  module V1
    class UsersController < ApplicationController
      def index
        render json: User.all
      end

      def create
        user = User.new(user_params)

        if user.save
          render json: user, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
      end
	def update
  	user = User.find(params[:id])
  	user.update!(user_params)
  	render json: user
	end

	def destroy
  	user = User.find(params[:id])
  	user.destroy
  	head :no_content
	end


      private

      def user_params
        params.require(:user).permit(:name, :email)
      end
    end
  end
end
