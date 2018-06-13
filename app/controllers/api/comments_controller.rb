class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.all
  end

  def create
    @comment = Comment.new(comment_params)

    if @comment.save!
      render :index
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def show
    @comment = Comment.find(params[:id])
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy

    render :index
  end

  private

  def comment_params
    params.require(:comment).permit(:bill_id, :author_id, :body)
  end
end
