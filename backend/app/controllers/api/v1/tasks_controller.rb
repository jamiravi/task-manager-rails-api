module Api
  module V1
    class TasksController < ApplicationController
      before_action :set_task, only: [:update, :destroy]

      def index
        render json: Task.where(user_id: params[:user_id])
      end

      def create
        task = Task.new(task_params)

        if task.save
          render json: task, status: :created
        else
          render json: { errors: task.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def update
        if @task.update(task_params)
          render json: @task
        else
          render json: { errors: @task.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def destroy
        @task.destroy
        render json: { message: "Task deleted successfully" }, status: :ok
      end

      private

      def set_task
        @task = Task.find(params[:id])
      rescue ActiveRecord::RecordNotFound
        render json: { error: "Task not found" }, status: :not_found
      end

      def task_params
        params.require(:task).permit(:title, :completed, :user_id)
      end
    end
  end
end
